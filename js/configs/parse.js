'use strict';

angular.module('app').config(function (ENV) {
  Parse.initialize(ENV.Parse.appId, ENV.Parse.jsKey);
});
