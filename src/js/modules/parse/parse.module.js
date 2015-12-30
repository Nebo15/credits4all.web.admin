'use strict';

angular.module('app.parse', []).factory('ParseSDK', function () {

  return Parse;

}).run(function ($q, $window) {

  if (angular.isUndefined($window.Parse) || !angular.isObject($window.Parse)) return;

  var Parse = $window.Parse;

  /// Override orig extend
  var origObjectExtend = Parse.Object.extend;

  Parse.Object.extend = function (protoProps) {

    var newClass = origObjectExtend.apply(this, arguments);

    if (angular.isObject(protoProps) && angular.isArray(protoProps.attrs)) {
      /// Generate setters & getters
      angular.forEach(protoProps.attrs, function (currentAttr) {

        var prop = Object.getOwnPropertyDescriptor(newClass.prototype, currentAttr);
        if (!prop) {
          newClass.prototype.__defineGetter__(currentAttr, function () {
            return this.get(currentAttr);
          });
          newClass.prototype.__defineSetter__(currentAttr, function (value) {
            return this.set(currentAttr, value);
          });
        }
      });
    }
    return newClass;
  };
});
