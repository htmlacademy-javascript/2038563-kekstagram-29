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

const extractNumbers = (str) => {
  //let newString = '';

  str = str.toString();

  const arr = str.split('');
  const newString = arr.reduce((acc, letter) => !Number.isNaN(parseInt(letter, 10)) ? [...acc, parseInt(letter, 10)] : [...acc], [])


  // for (let i = 0; i < str.length; i++) {
 //   newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
 // }

 return parseInt(newString.join(''), 10);
}

console.log(extractNumbers('2023 год'));
console.log(extractNumbers('00ECMAScript 2022'));
console.log(extractNumbers('1 кефир, 0.5 батона'));
console.log(extractNumbers(' '));
