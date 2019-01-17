/*
* @desc cylon service that handles hide and show functionality
* for the Cylon Directive.
*
* Callbacks are registered via the cylon directive.
*/

angular.module('todoozyApp').factory('Cylons', cylons);

function cylons() {
  const registry = {};
  let active = [];

  return {
    register,
    start,
    finish,
  };

  function register(name, startCallback, finishCallback) {
    registry[name] = registry[name] || [];
    registry[name].push({ startCallback, finishCallback });
    if (active.indexOf(name) > -1) {
      startCallback();
    }
  }

  function start(name) {
    active.push(name);
    if (registry[name]) {
      for (const { startCallback } of registry[name]) {
        startCallback();
      }
    }
  }

  function finish(name, clear = true) {
    active = active.filter((n) => n != name);
    if (registry[name]) {
      for (const { finishCallback } of registry[name]) {
        finishCallback();
      }
      if (clear) {
        delete registry[name];
      }
    }
  }
}
