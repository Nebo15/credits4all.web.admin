module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      "https://parse.com/downloads/javascript/parse-1.6.12.js",
      "src/bower_components/angular/angular.js",
      "src/bower_components/angular-mocks/angular-mocks.js",
      "src/bower_components/parse-angular-patch/src/parse-angular.js",
      "src/js/**/*.module.js",
      "src/js/**/*.js"
    ],
    autoWatch : true,

    frameworks: ['jasmine','jasmine-matchers'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      "karma-phantomjs-launcher",
      'karma-jasmine',
      'karma-junit-reporter',
      "karma-jasmine-matchers"
    ],

    junitReporter : {
      outputFile: '.karma/output/unit.xml',
      suite: 'unit'
    }

  });
};
