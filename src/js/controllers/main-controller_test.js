describe('MainController', function () {

  beforeEach(module('app'));
  beforeEach(module('app.models'));

  var $controller;
  var ctrl,
    scope;

  beforeEach(inject(function (_$controller_, $rootScope) {
    $controller = _$controller_;

    scope = $rootScope.$new();
    ctrl = $controller('MainController', {$scope: scope});
    spyOn(scope, 'update').and.callThrough();
  }));

  it ('should be defined', function () {
    expect(ctrl).not.toBeUndefined();
  });

  describe('scope', function () {

    it ('should success destroy', function () {
      scope.$destroy();
      expect(true).toEqual(true);
    });

    it ('should update objects from ApplicationCollection.loadApplications', inject(function (_ApplicationCollection_) {
      spyOn(_ApplicationCollection_,'loadApplications').and.callThrough();
      scope.update();
      expect(_ApplicationCollection_.loadApplications.calls.count()).toEqual(1);
    }));

  });


});
