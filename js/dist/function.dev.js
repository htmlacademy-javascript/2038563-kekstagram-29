"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//-------------------проверка длины строки----------------------

/*
const checkString = (str, limit) => str.length <= limit;


console.log (checkString('строка',20))


//-------------------проверка строки на полиндром----------------

const checkPolindrom = (string) => {
  let transfomString = string.replaceAll('', '').toLowerCase();
  let newStr = '';

  for (let i = transfomString.length - 1; i >= 0; i--) {
    newString  += transfomString[i];
  }
  return transfomString === newStr;
}



console.log(checkPolindrom('ДовОд') ? 'ПАлиндром' : 'НЕ палиндром')
*/
//---------------------извлечение цифр---------------------
var extractNumbers = function extractNumbers(str) {
  //let newString = '';
  str = str.toString();
  var arr = str.split('');
  var newString = arr.reduce(function (acc, letter) {
    return !Number.isNaN(parseInt(letter, 10)) ? [].concat(_toConsumableArray(acc), [parseInt(letter, 10)]) : _toConsumableArray(acc);
  }, []); // for (let i = 0; i < str.length; i++) {
  //   newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
  // }

  return parseInt(newString.join(''), 10);
};

console.log(extractNumbers('2023 год'));
console.log(extractNumbers('00ECMAScript 2022'));
console.log(extractNumbers('1 кефир, 0.5 батона'));
console.log(extractNumbers(' '));