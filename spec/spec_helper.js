/**
 * @desc Global utilities for js tests
 */

/**
 * @summary Utility method to instantiate a controller/service/whatever with
 * particular dependencies.
 * @param {string} thing (Controller/Service/Factory name)
 * @param {array} locals (dependencies)
 */
function makeWith(thing, locals) {
  angular.mock.module(function($provide) {
    for (let key in locals) {
      if (locals.hasOwnProperty(key)) {
        $provide.value(key, locals[key]);
      }
    }
    return null;
  });
  let ret = {};
  angular.mock.inject([thing, whatever => ret = whatever]);
  return ret;
};

/**
 * @summary In order to view isolateScopes when testing directives we need
 * to enable debug mode in our application. Include these functions at the top
 * of your directive tests. See other `.directive.spec`s for examples
 * @example `before(beforeDirective)`, `after(afterDirective)`
 */
function beforeDirective() {
  angular.module('todoozyApp').config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(true);
  });
}

function afterDirective() {
  angular.module('todoozyApp').config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(false);
  });
}

/**
 * @summary Constructor method for creating dependencies in directive tests
 * @param {object} props
 */
function createProviderWithProps(props) {
  const $get = () => props;
  return { $get };
}

/**
 * @summary Constructor for stubbing modal functionality
 */
function createModal($provide) {
  const modalProps = {
    open() { return this; },
    result: {
      then(confirmCallback) { this.confirmCallback = confirmCallback; },
    },
    close(data) { this.result.confirmCallback(data); },
  };
  $provide.provider('$modal', createProviderWithProps(modalProps));
}

/**
 * @summary Utility methods to create a sandbox environment for our tests
 * using sinon.
 * NOTE: beforeEach and afterEach require `function()` instead of an ES6 arrow
 * function due to scope/closure issues
 */
beforeEach(function() {
  return this.sinon = sinon.createSandbox();
});

afterEach(function() {
  return this.sinon.restore();
})
