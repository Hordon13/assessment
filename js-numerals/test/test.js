const expect = require('chai').expect;
const convert = require('./converter');

describe('AppTest', function () {

  it('string input should throw type error', function () {
    expect(() => convert('number')).to.throw('non-numeric input');
  });

  it('float input should throw type error', function () {
    expect(() => convert(1.2)).to.throw('input is not a number, but not an integer');
  });

  it('long number should throw overflow error', function () {
    expect(() => convert(2000000000000000)).to.throw('too long number, limit: 15');
  });

  it('fn should return with a string', function () {
    expect(convert(7)).to.be.a('string');
  });

  it('fn should return zero', function () {
    expect(convert(0)).to.equal('zero');
  });

  it('fn should return seven', function () {
    expect(convert(7)).to.equal('seven');
  });

  it('fn should return forty-two', function () {
    expect(convert(42)).to.equal('forty-two');
  });

  it('fn should return two thousand and one', function () {
    expect(convert(2001)).to.equal('two thousand and one');
  });

  it('fn should return nineteen hundred and ninety-nine', function () {
    expect(convert(1999)).to.equal('one thousand nine hundred and ninety-nine');
  });

  it('fn should return seventeen thousand nine hundred and ninety-nine', function () {
    expect(convert(17999)).to.equal('seventeen thousand nine hundred and ninety-nine');
  });

  it('fn should return minus eleven', function () {
    expect(convert(-11)).to.equal('minus eleven');
  });

  it('fn should return minus one hundred', function () {
    expect(convert(-100)).to.equal('minus one hundred');
  });

  it('fn should return minus one hundred seventy million and one', function () {
    expect(convert(-170000001)).to.equal('minus one hundred seventy million and one');
  });

  it('fn should return extreme big number', function () {
    expect(convert(999999999999999)).to.equal('nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred and ninety-nine');
  });

});
