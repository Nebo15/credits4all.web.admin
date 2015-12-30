'use strict';

angular.module('app').controller('MainController', function ($scope, $timeout, ApplicationCollection, ApplicationModel) {

  $scope.objects = [];
  $scope.update = function () {
    console.log('update');
    return ApplicationCollection.loadApplications().then(function (result) {
      $scope.objects = result;
      $scope.$apply();
    });
  };
  $scope.addNew = function () {
    var model = new ApplicationModel({
      "AppID": 123,
      "AppDate": new Date(),
      "AppState": "test",
      "ExpiryDate": new Date(),
      "ProductID": 123,
      "Amount": 1,
      "Term": 0,
      "FirstName": "Ivan",
      "LastName": "Ivanov",
      "BirthDate": new Date(),
      "NDI": "1234567890123",
      "Passport": "AB1234567",
      "Phone": "+380987654321",
      "Email": "example@example.com",
      "Password": "password",
      "Sex": "mail",
      "DNISerie": "A12345678",
      "DNIDateFrom": new Date(),
      "DNIDateTill": new Date(),
      "DNIIssuePlace": "issue place",
      "PassportDateFrom": new Date(),
      "PassportDateTill": new Date(),
      "ZipCode": "123456",
      "City": "Kyiv",
      "Street": "Kyiv str.",
      "Building": "1",
      "Flat": "15",
      "WorkType": "",
      "Organisation": "Company LLC",
      "JobCategory": "Manager",
      "Position": "Manager of IT",
      "IncomeAmount": 200,
      "ExpencesAmount": 10,
      "Decision": null,
      "Approver": null
    });
    model.save();
  };
  $scope.$on('$destroy', function () {});
  $scope.update();
});

