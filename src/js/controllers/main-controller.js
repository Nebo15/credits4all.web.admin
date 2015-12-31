'use strict';

angular.module('app').controller('MainController', function ($scope, $timeout, $filter, ApplicationCollection, ApplicationModel) {

  $scope.objects = [];

  var Column = function (name, type, visible) {
    this.name = name;
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
    "AppID": new Column("AppID", "number", true),
    "AppDate": new Column("AppDate", "date", true),
    "AppState": new Column("AppState", "text", true),
    "ExpiryDate": new Column("ExpiryDate", "date", true),
    "ProductID": new Column("ProductID", "number", true),
    "Amount": new Column("Amount", "number", true),
    "Term": new Column("Term", "number", true),
    "FirstName": new Column("FirstName", "text", true),
    "LastName": new Column("LastName", "text", true),
    "BirthDate": new Column("BirthDate", "date", true),
    "NDI": new Column("NDI", "number", false),
    "Passport": new Column("Passport", "text", false),
    "Phone": new Column("Phone", "phone", false),
    "Email": new Column("Email", "email", false),
    "Password": new Column("Password", "text", false),
    "Sex": new Column("Sex", "text", false),
    "DNISerie": new Column("DNISerie", "text", false),
    "DNIDateFrom": new Column("DNIDateFrom", "date", false),
    "DNIDateTill": new Column("DNIDateTill", "date", false),
    "DNIIssuePlace": new Column("DNIIssuePlace", "text", false),
    "PassportDateFrom": new Column("PassportDateFrom", "date", false),
    "PassportDateTill": new Column("PassportDateTill", "date", false),
    "ZipCode": new Column("ZipCode", "number", false),
    "City": new Column("City", "text", false),
    "Street": new Column("Street", "text", false),
    "Building": new Column("Building", "text", false),
    "Flat": new Column("Flat", "text", false),
    "WorkType": new Column("WorkType", "text", false),
    "Organisation": new Column("Organisation", "text", false),
    "JobCategory": new Column("JobCategory", "text", false),
    "Position": new Column("Position", "text", false),
    "IncomeAmount": new Column("IncomeAmount", "number", false),
    "ExpencesAmount": new Column("ExpencesAmount", "number", false),
    "Decision": new Column("Decision", "text", false),
    "Approver": new Column("Approver", "text", false)
  };

  $scope.update = function () {
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
  $scope.approve = function (application) {
    // approve application
  };
  $scope.reject = function (application) {
    // reject application
  };
  $scope.edit = function (application) {
    // edit application
  };

  $scope.$on('$destroy', function () {});
  $scope.update();
});

