describe('app.module', function () {
  beforeEach(module('app'));

  it ('should have rootScope', inject(function (_$rootScope_) {
    expect(_$rootScope_).not.toBeUndefined();
  }));

});
