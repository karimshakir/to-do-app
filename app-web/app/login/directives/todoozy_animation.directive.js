angular.module('todoozyApp')
  .directive('todoozyAnimation', todoozyAnimationDirective);

todoozyAnimationDirective.$inject = ['$state', '$window'];

function todoozyAnimationDirective($state, $window) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'todoozy/login/views/todoozy_animation.html',
    link,
  };

  function link(scope, element) {
    let canvas;
    let stage;

    function init() {
      canvas = $(element).find('canvas')[0];
      handleComplete();
    }
    function handleComplete() {
      // This function is always called, irrespective of the content. You can use the constiable "stage" after it is created in token create_stage.
      const todoozybase = new $window.lib.Foxanim_v1();
      stage = new createjs.Stage(canvas);
      stage.addChild(todoozybase);

      // Registers the "tick" event listener.
      createjs.Ticker.setFPS($window.lib.properties.fps);
      createjs.Ticker.addEventListener('tick', stage);

      // Code to support hidpi screens and responsive scaling.
      handleResizing(false, 'both', false, 1);
    }

    function handleResizing(isResp, respDim, isScale, scaleType) {
      let lastW;
      let lastH;
      let lastS = 1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        const w = $window.lib.properties.width;
        const h = $window.lib.properties.height;
        const iw = window.innerWidth;
        const ih = window.innerHeight;
        const pRatio = window.devicePixelRatio;
        const xRatio = iw / w;
        const yRatio = ih / h;
        let sRatio = 1;
        if (isResp) {
          if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
            sRatio = lastS;
          } else if (!isScale) {
            if (iw < w || ih < h) {
              sRatio = Math.min(xRatio, yRatio);
            }
          } else if (scaleType == 1) {
            sRatio = Math.min(xRatio, yRatio);
          } else if (scaleType == 2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        canvas.width = w * pRatio * sRatio;
        canvas.height = h * pRatio * sRatio;
        canvas.style.width = `${w * sRatio}px`;
        canvas.style.height = `${h * sRatio}px`;
        stage.scaleX = pRatio * sRatio;
        stage.scaleY = pRatio * sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
      }
    }
    init();
  }
}
