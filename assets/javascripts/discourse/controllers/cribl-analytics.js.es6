import Controller from '@ember/controller';
import { action } from '@ember/object';
import discourseComputed from 'discourse-common/utils/decorators';
import Analyics from '../models/cribl-analyics';

export default Controller.extend({
  queryParams: {
    period: 'period',
    page: 'page',
  },
  isLoading: false,
  isLoadingMore: false,

  @discourseComputed('page', 'period')
  hasParams(page, period) {
    if(period == null)
      this.set('period', 'quarter');
    return true;
  },

  @action
  loadMore() {
    const analyics = this.get('analyics');
    const limit = this.get('analyicsRowLimit');
    const canLoadMore = analyics.length < limit;

    if (canLoadMore && !this.isLoadingMore) {
      this.set('isLoadingMore', true);
      Analyics.loadMore(this.loadMoreUrl).then((result) => {
        analyics.addObjects(result.data.props);
        this.set('loadMoreUrl', result.meta.load_more_analyics || null);
        this.set('isLoadingMore', false);
      });
    }
  },
});
