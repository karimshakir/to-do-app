angular.module('todoozyApp')
  .factory('InfoHeader', infoHeaderService);

infoHeaderService.$inject = [
  '$rootScope',
];

function infoHeaderService($rootScope) {
  class Breadcrumbs {
    constructor() {
      this.breadcrumbs = [];
    }

    get() {
      return this.breadcrumbs;
    }

    // Mutate the list of breadcrumbs because it's
    // probably bound to a scope somewhere that we want to update
    set(breadcrumbs) {
      this.clear();
      breadcrumbs.forEach((breadcrumb) => this.breadcrumbs.push(breadcrumb));
    }

    clear() {
      this.breadcrumbs.length = 0;
    }
  }

  const breadcrumbs = new Breadcrumbs();

  // We want each of these to be set after stateChange (new angular route) by a controller, not carried over
  $rootScope.$on('$stateChangeStart', () => {
    breadcrumbs.clear();
  });

  return {
    breadcrumbs,
  };
}
