describe('Applications Collection', function () {

  beforeEach(module('app.models'));

  var collection;
  beforeEach(inject(function (_ApplicationCollection_) {
    collection = _ApplicationCollection_;
  }));
  it ('should be defined', function () {
    expect(collection).not.toBeUndefined();
  });
  describe('loadApplications', function () {
    it ('should get data', function (done) {
      collection.loadApplications().then(function (result) {
        expect(result).toBeArrayOfObjects();
        done();
      })
    });
  })

});
