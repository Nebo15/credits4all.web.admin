'use strict';

angular.module('app').controller('MainController', function ($scope) {

  $scope.objects = [];
  $scope.update = function () {

  };

  $scope.$on('$destroy', function () {
    //hide();
  })
});

