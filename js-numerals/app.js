"use strict";

const convert = function (num) {

  if (isNaN(num)) {
    throw new TypeError('❗️You can only use numbers.');
  } else if (!Number.isInteger(num)) {
    throw new TypeError('❗️Please use integers only.')
  } else if (num.toString().length > 10) {
    throw new RangeError('Please use a number with less than 10 digits.')
  }

  return '';
};

module.exports = convert;
