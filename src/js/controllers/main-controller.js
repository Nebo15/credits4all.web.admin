'use strict';

angular.module('app').controller('MainController', function ($scope, ApplicationCollection) {

  $scope.objects = [];
  $scope.update = function () {
    $scope.objects = ApplicationCollection.loadApplications();
  };

  $scope.$on('$destroy', function () {
    //hide();
  })
});

