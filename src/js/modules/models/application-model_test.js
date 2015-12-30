describe('Application' , function () {
  beforeEach(module('app.models'));

  describe('Model', function () {
    var model, application;
    beforeEach(inject(function (_ApplicationModel_) {
      model = _ApplicationModel_;
      application = new model;
    }));

    it ('should be defined', function () {
      expect(model).not.toBeUndefined();
    });
    it ('should create instance', function () {
      console.log(application, new model);
      expect(application).not.toBeUndefined();
    });
    it ('should save, update and delete', function (done) {
      application.set('Amount', 0);
      application.save().then(function (obj) {
        expect(obj.get('Amount')).toEqual(0);
        obj.set('Amount',1.00);
        return obj.save();
      }).then(function (obj) {
        expect(obj.get('Amount')).toEqual(1);
        return obj.destroy();
      }).then(done);
    });
    it ('should provide access by virtual setter and getters', function (done) {
      application.Amount = 10;
      application.save().then(function (obj) {
        expect(obj.Amount).toEqual(10);
        return obj.destroy();
      }).then(done);
    });

  })
});
