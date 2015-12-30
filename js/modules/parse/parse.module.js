'use strict';

angular.module('app.parse', []).factory('ParseSDK', function () {

  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return Parse;
});
