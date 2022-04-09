let should = require('should');
describe('Suite A', function () {
  it('Foo', function (done) {
    setTimeout(function () {
      (true).should.equal(true);
      done();
    }, 1000);
  });
  it('Bar', function () {
    (true).should.equal(true);
  });
});
describe('Suite B', function () {
  it('Foo', function () {
    (true).should.equal(true);
  });
});