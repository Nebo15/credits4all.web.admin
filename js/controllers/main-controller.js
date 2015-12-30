'use strict';

angular.module('app').controller('MainController', function ($scope, $timeout, $filter, ApplicationCollection, ApplicationModel) {

  $scope.objects = [];

  var Column = function (type, visible) {
    this.type = type;
    this.visible = visible;
  };
  Column.prototype = {};
  Column.prototype.filter = function (value) {
    switch (this.type) {
      case 'date':
        return $filter('date')(value, 'dd/MM/yyyy');
        break;
      default:
        return value;
    }
  };

  $scope.properties = {
    "AppID": new Column("number", true),
    "AppDate": new Column("date", true),
    "AppState": new Column("text", true),
    "ExpiryDate": new Column("date", true),
    "ProductID": new Column("number", true),
    "Amount": new Column("number", true),
    "Term": new Column("number", true),
    "FirstName": new Column("text", true),
    "LastName": new Column("text", true),
    "BirthDate": new Column("date", true),
    "NDI": new Column("number", false),
    "Passport": new Column("text", false),
    "Phone": new Column("phone", false),
    "Email": new Column("email", false),
    "Password": new Column("text", false),
    "Sex": new Column("text", false),
    "DNISerie": new Column("text", false),
    "DNIDateFrom": new Column("date", false),
    "DNIDateTill": new Column("date", false),
    "DNIIssuePlace": new Column("text", false),
    "PassportDateFrom": new Column("date", false),
    "PassportDateTill": new Column("date", false),
    "ZipCode": new Column("number", false),
    "City": new Column("text", false),
    "Street": new Column("text", false),
    "Building": new Column("text", false),
    "Flat": new Column("text", false),
    "WorkType": new Column("text", false),
    "Organisation": new Column("text", false),
    "JobCategory": new Column("text", false),
    "Position": new Column("text", false),
    "IncomeAmount": new Column("number", false),
    "ExpencesAmount": new Column("number", false),
    "Decision": new Column("text", false),
    "Approver": new Column("text", false)
  };

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
    model.save().then(function () {
      return $scope.update();
    })
  };
  $scope.$on('$destroy', function () {});
  $scope.update();
});

