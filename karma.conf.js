'use strict';

module.exports = function(config) {
  var baseConfig = {
    files: [
      'test/index.js'
    ],

    browsers: ['PhantomJS'],

    frameworks: ['browserify', 'mocha'],

    reporters: ['spec', 'coverage'],

    preprocessors: {
      'index.js': 'browserify',
      'test/**/*.js': 'browserify'
    },

    browserify: {
      debug: true,
      transform: [
        [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }
        ]
      ]
    },

    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html' },
        { type: 'json' }
      ]
    }
  };

  if (process.env.CI) {
    Object.assign(baseConfig, require('./karma.conf.ci'));
  }

  config.set(baseConfig);
};
