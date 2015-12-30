describe('MainController', function () {

  beforeEach(module('app'));

  var $controller;
  var ctrl,
    scope;

  beforeEach(inject(function (_$controller_, $rootScope) {
    $controller = _$controller_;

    scope = $rootScope.$new();
    ctrl = $controller('MainController', {$scope: scope});
  }));

  it ('should be defined', function () {
    expect(ctrl).not.toBeUndefined();
  });

  describe('scope', function () {
    it ('should has default array of objects', function () {
      expect(scope.objects).toEqual([]);
    });
    it ('should success destroy', function () {
      scope.$destroy();
      expect(true).toEqual(true);
    });

    it ('should update objects from ApplicationCollection.loadApplications', inject(function (_ApplicationCollection_) {
      spyOn(_ApplicationCollection_,'loadApplications').and.returnValue([1,2,3]);
      scope.update();
      expect(scope.objects).toEqual([1,2,3]);
    }))

  });


});
