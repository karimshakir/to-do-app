angular.module('todoozyApp').factory('RequestBuffer', requestBuffer);

function requestBuffer() {
  let buffer = [];
  const updaters = [];
  return {
    registerUpdater(updater) {
      return updaters.push(updater);
    },
    append(config, deferred, processor) {
      let containsRequest = 0;
      for (const bufferEntry of Array.from(buffer)) {
        if (bufferEntry.config === config) {
          containsRequest = 1;
          return;
        }
      }
      if (containsRequest === 0) {
        buffer.push({
          config,
          deferred,
          processor,
        });
      }
      return;
    },
    retryAll() {
      const newBuffer = [];
      for (const request of Array.from(buffer)) {
        let { config } = request;
        for (const updater of Array.from(updaters)) {
          config = updater(config);
        }
        if (!request.processor(config, request.deferred)) {
          newBuffer.push(request);
        }
      }
      buffer = newBuffer;
      return buffer;
    },
  };
}
