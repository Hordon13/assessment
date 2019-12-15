"use strict";

const convert = function (num) {

  let result = '';
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
  const scale = ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

  if (isNaN(num)) {
    throw new TypeError('❗️You can only use numbers.');
  } else if (!Number.isInteger(num)) {
    throw new TypeError('❗️Please use integers only.')
  }

  const len = 1 + Math.log10(Math.abs(num) + 1) | 0;
  if (len > 33) {
    throw new RangeError('Please use a number with less than 33 digits.')
  }

  if (num === 0) {
    return 'zero';
  } else if (num < 0) {
    result = 'minus ';
    num = -num;
  }

  if (num in numbers) {
    result += numbers[num];
  }

  return result;
};

module.exports = convert;
