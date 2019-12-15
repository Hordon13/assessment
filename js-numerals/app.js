"use strict";

const convert = function (num) {
  let chunks = [];
  let negative = false;
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
  const scale = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

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
    negative = true;
    num = -num;
  }

  let temp = '';
  while (num > 0) {
    temp += num % 10;
    num = Math.floor(num / 10);
    if (temp.length === 3 || num === 0) {
      temp = Number(temp.split("").reverse().join(""));
      chunks.unshift(temp);
      temp = '';
    }
  }

  for (let i = 0; i < chunks.length; i++) {
    let num = chunks[i];
    let result = '';

    if (i > 0) {
      result += scale[chunks.length - 1 - i] + ' ';
    }

    if (num.toString().length === 3) {
      result += numbers[num.toString()[0]] + ' hundred';
      num = Number(num.toString().slice(-2));
      if (num === 0) {
        chunks[i] = result;
        continue;
      }
      result += ' '
    }

    if (i === 1 && chunks.length > 1) {
      result += 'and '
    }

    if (num in numbers) {
      result += numbers[num];
    } else {
      result += numbers[num - num % 10] + '-' + numbers[num % 10];
    }

    chunks[i] = result;
  }

  if (negative) {
    chunks.unshift('minus')
  }

  return chunks.join(' ')
};

module.exports = convert;
