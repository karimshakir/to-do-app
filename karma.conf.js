module.exports = (config) => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      // NOTE: this list should match all vendor files in the gulpfile
      './node_modules/babel-polyfill/dist/polyfill.js',
      './app-web/vendor/jquery/dist/jquery.js',
      './app-web/vendor/jquery-ui/jquery-ui.js',
      './app-web/vendor/angular/angular.js',
      './app-web/vendor/lodash/lodash.js',
      './app-web/vendor/angular-route/angular-route.js',
      './app-web/vendor/angular-webstorage/angular-webstorage.js',
      './app-web/vendor/angular-ui-router/release/angular-ui-router.js',
      './app-web/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      './app-web/vendor/ng-table/dist/ng-table.min.js',
      './app-web/vendor/restangular/dist/restangular.js',
      './app-web/vendor/angular-tablesort/js/angular-tablesort.js',
      // bower components specifically for testing
      './app-web/vendor/angular-mocks/angular-mocks.js',
      './spec/spec_helper.js',

      // the app
      './app-web/app/app.js',
      './app-web/app/**/*.js',
      './app-web/app/**/*.html',

      './spec/app-web/app/**/*.js',
    ],

    // list of files to exclude
    exclude: [],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app-web/app/',
      prependPrefix: 'todoozy/',
      moduleName: 'todoozyTemplates',
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline',
      },
      sourceFileName: (file) => {
        return file.originalPath;
      },
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app-web/app/**/**/*.js': ['coverage'],
      'spec/app-web/**/**/*.js': ['babel'],
      'app-web/app/**/*.html': ['ng-html2js'],
      'app-web/app/**/*.js': ['babel'],
      'spec/spec_helper.js': ['babel'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values:
    // - config.LOG_DISABLE
    // - config.LOG_ERROR
    // - config.LOG_WARN
    // - config.LOG_INFO
    // - config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    client: {
      captureConsole: true,
    },

    coverageReporter: {
      check: {
        global: {
          statements: 60,
        },
      },
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: 'js-report-html' },
        { type: 'text-summary' },
      ],
    },
  });
};
