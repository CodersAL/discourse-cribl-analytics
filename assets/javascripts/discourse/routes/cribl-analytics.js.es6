import DiscourseRoute from 'discourse/routes/discourse';
import I18n from 'I18n';
import Analyics from '../models/cribl-analyics';

export default DiscourseRoute.extend({
  queryParams: {
    period: { refreshModel: true },
    page: { refreshModel: true },
  },

  model(params) {
    this.controllerFor('cribl.analyics').set('isLoading', true);
    return Analyics.list(params).then((result) => {
      this.controllerFor('cribl.analyics').set('isLoading', false);
      return result;
    });
  },

  titleToken() {
    return I18n.t('cribl_analyics.title');
  },

  setupController(controller, model) {
    controller.setProperties({
      analyics: model.data.props,
      loadMoreUrl: model.meta.load_more_analyics,
      analyicsRowLimit: model.meta.total_rows_analyics,
    });
  },
});
