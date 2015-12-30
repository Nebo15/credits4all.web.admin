'use strict';

angular.module('app.models').factory('ApplicationModel', function (ParseSDK) {
  return ParseSDK.Object.extend({
    className: "Application",
    // Extend the object with getter and setters  (see parse-angular-patch GitHub repo)
    attrs: [
      "AppID",
      "AppDate",
      "AppState",
      "ExpiryDate",
      "ProductID",
      "Amount",
      "Term",
      "FirstName",
      "LastName",
      "BirthDate",
      "NDI",
      "Passport",
      "Phone",
      "Email",
      "Password",
      "Sex",
      "DNISerie",
      "DNIDateFrom",
      "DNIDateTill",
      "DNIIssuePlace",
      "PassportDateFrom",
      "PassportDateTill",
      "ZipCode",
      "City",
      "Street",
      "Building",
      "Flat",
      "WorkType",
      "Organisation",
      "JobCategory",
      "Position",
      "IncomeAmount",
      "ExpencesAmount",
      "Decision",
      "Approver"
    ]
  });
})

