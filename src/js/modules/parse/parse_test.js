describe('ParseSDK', function () {
  beforeEach(module('app.parse'));
  var sdk;
  beforeEach(inject(function (_ParseSDK_) {
    sdk = _ParseSDK_;
  }));
  it ('should be defined', function () {
    expect(sdk).not.toBeUndefined();
  });

  it ('should work', function (done) {
    var TestObject = sdk.Object.extend("TestObject");
    var testObject = new TestObject();

    testObject.save({foo: "bar"}).then(function(obj) {
      expect(obj.get('foo')).toEqual('bar');
      return obj.destroy();
    }).then(done)
  });
});

