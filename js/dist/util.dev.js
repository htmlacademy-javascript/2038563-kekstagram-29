"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkString = exports.getRandomInteger = exports.createRandomIdFromRangeGenerator = exports.isEscapeKey = void 0;

var isEscapeKey = function isEscapeKey(evt) {
  return evt.key === 'Escape';
}; // генерация случайного числа с повторами


exports.isEscapeKey = isEscapeKey;

var getRandomInteger = function getRandomInteger(min, max) {
  var lower = Math.ceil(Math.min(min, max));
  var upper = Math.floor(Math.max(min, max));
  var result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}; // генерация случайного числа с контролем (без) повторений


exports.getRandomInteger = getRandomInteger;

var createRandomIdFromRangeGenerator = function createRandomIdFromRangeGenerator(min, max) {
  var previousValues = [];
  return function () {
    var currentValue = getRandomInteger(min, max);

    if (previousValues.length >= max - min + 1) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
}; //--------------------------------------------


exports.createRandomIdFromRangeGenerator = createRandomIdFromRangeGenerator;

var checkString = function checkString(str, limit) {
  return str.length <= limit;
};

exports.checkString = checkString;