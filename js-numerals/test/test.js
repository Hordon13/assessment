const expect = require('chai').expect;
const convert = require('../app');

describe('AppTest', function () {

  it('should throw error', function () {
    expect(() => convert('number')).to.throw('❗️You can only use numbers.');
  });

  it('should return with a string', function () {
    expect(convert(7)).to.be.a('string');
  });

  it('should return zero', function () {
    expect(convert(0)).to.equal('zero');
  });

  it('should return seven', function () {
    expect(convert(7)).to.equal('seven');
  });

  it('should return forty-two', function () {
    expect(convert(42)).to.equal('forty-two');
  });

  it('should return two thousand and one', function () {
    expect(convert(2001)).to.equal('two thousand and one');
  });

  it('should return nineteen hundred and ninety-nine', function () {
    expect(convert(1999)).to.equal('nineteen hundred and ninety-nine');
  });

  it('should return seventeen thousand nine hundred and ninety-nine', function () {
    expect(convert(17999)).to.equal('seventeen thousand nine hundred and ninety-nine');
  });

  it('should return minus eleven', function () {
    expect(convert(-11)).to.equal('minus eleven');
  });

});
