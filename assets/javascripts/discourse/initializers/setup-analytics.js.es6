import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  const siteSettings = api.container.lookup('site-settings:main');
  const currentUser = api.getCurrentUser();

  if (!siteSettings.cribl_analyics_enabled) {
    return;
  }

  if (siteSettings.cribl_hamburger_analyics_button && currentUser) {
    api.decorateWidget('hamburger-menu:generalLinks', () => {
      return {
        route: 'cribl.analyics',
        label: 'cribl_analyics.title',
        className: 'cribl-analyics-link',
      };
    });
  }

  if (siteSettings.cribl_nav_analyics_button && currentUser) {
    api.addNavigationBarItem({
      name: 'cribl.analyics',
      displayName: I18n.t('cribl_analyics.title'),
      href: '/cribl/analyics',
    });
  }
});
