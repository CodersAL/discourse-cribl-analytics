import { ajax } from 'discourse/lib/ajax';
import { popupAjaxError } from 'discourse/lib/ajax-error';

export default {
  shouldRender(args, component) {
    return component.siteSettings.cribl_analyics_enabled;
  },

  setupComponent(args, component) {
    this.set('classNames', ['linked-stat']);

    ajax(`/cribl/analyics.json?user_id=${args.user.id}`)
      .then(({ data }) => {
        const points = data[0]?.points;

        if (!points) {
          component.set('points', null);
        }

        component.set('points', points);
      })
      .catch(popupAjaxError);
  },
};
