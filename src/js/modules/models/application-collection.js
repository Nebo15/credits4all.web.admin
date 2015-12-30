'use strict';

angular.module('app.models').service('ApplicationCollection', function (ApplicationModel, ParseSDK) {
  this.loadApplications = function () {
    var query = new ParseSDK.Query(ApplicationModel);
    return query.find();
  }
});

