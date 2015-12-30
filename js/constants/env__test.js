describe('ENV Constant', function () {

  beforeEach(module('app'));

  var ENV;
  beforeEach(inject(function (_ENV_) {
    ENV = _ENV_;
  }));

  it ('should be defined', function () {
    expect(ENV).not.toBeUndefined();
  });
  it ('should has Parse prop', function () {
    expect(ENV.Parse).not.toBeUndefined();
  });
});
