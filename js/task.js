//----------------------------счетчик для перебирания массива-----------------
/*
const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
  },
];

const getUserNames = (arr) => {
  const names = [];
  for (let i = 0; i<=users.length-1;  i++) {
    names.push(arr[i].name);
  }
  return names;
};

console.log(getUserNames(users))


//--------------та же задача методом "map"-------------------------------

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
  },
];

const getUserNames = (arr) => {
  return  arr.map((oneUser) => {return oneUser.name}); // <--это callback
};

console.log(getUserNames(users))

//-------------еще короче---------

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
  },
];

const getUserNames = (arr) =>  arr.map((oneUser) =>  oneUser.name); // <--это сложнее но короче без return

console.log(getUserNames(users))


//нам нужно показать только активных пользователей isActive

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
  },
];

const getUserNames = (arr) => {
  const names = [];
  for (let i = 0; i<=users.length-1;  i++) {
    if (arr[i].isActive) {
    names.push(arr[i].name);
    };
  }
  return names;
};

console.log(getUserNames(users))

//----------------------------тоже условие но короче-----------------
const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
  },
];

const getUserNames = (arr) => arr.map((user) => ({id: user.id, alias: user.name}));

const getActiveUsers = (arr) => arr
  .filter((item) => item.isActive)
  .map((activeUsers) => activeUsers.name);

console.log(getActiveUsers(users))

//-----------сортируем по возрасту-----------------------------------

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
    age: 19
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
    age: 29
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
    age: 80
  },
];

const getUserNames = (arr) => arr.map((user) => ({id: user.id, alias: user.name}));

const getActiveUsers = (arr) => arr
  .filter((item) => item.isActive)
  .map((activeUsers) => activeUsers.name);

const sortByAge = (arr) => arr.sort((item1, item2) => item1.age < item2.age ? 1 : -1) //callback имеет в сорте 2 параметра чтобы сравнивать
  .map((user) => `${user.name}: ${user.age}`)//конкатенация сейчас так пишется



console.log(sortByAge(users))

//------------------следующий созвон есть ли совпадения по параметрам -------------------------------------

import { name } from "browser-sync";

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
    age: 19
  },
  {
    id: 2,
    name: 'James',
    isActive: false,
    age: 29
  },
  {
    id: 3,
    name: 'Jack',
    isActive: true,
    age: 80
  },
];
const isNameExist = (name,arr)  => arr.some {(element) => element.name === name};

console.log(isNameExist('John',users))
*/

//-----------------------------------------фрукты-убираем из массива повторяющиеся-------------------

const fruits = [
  "banana",
  "kiwi",
  "pomelo",
  "banana",
  "apple",
  "ananas",
  "peach"
];

const getUniqueArr = (arr) => [...new Set(arr)];//1вариант--удаляет повторения set ...-оператор превращвет массив

const getUniqueArr1 = (arr) => {
  const result = [];

  arr.forEach((item) => {     //2вариант -перебирает массив
    if (!result.includes(item)) {
      result.push(item)
    }
  });
  return result;
};

const getUniqueArr2 = (arr) => arr.reduce((accamulator, item) => accamulator.includes(item) ? accamulator : [...accamulator, item] ) ;//--------третий вариант
//на первой итерации в reduce кладем 1й параметр стартовое значение аккамулятора (у нас пустой массив)


console.log(getUniqueArr(fruits));
console.log(getUniqueArr1(fruits));
console.log(getUniqueArr2(fruits));


//---------------------------------------еще задачи из ДЗ-сумма элементов кратных 3 и 5--------------------------


/*
const getMultiplaceThreeOrFive = (n) => {
  let summ = 0;

  for  (let i = 1; i<= n; i++) {
    if (i % 3 === 0 || i%5 === 0) {
      summ = summ + i;
    }
  }
return summ;
};

//console.log(getMultiplaceThreeOrFive(10));




const getMultiplaceThreeOrFive1 = (n) => {
  [...Array(n-1).keys()]
  .map((item) => item +1)
  .reduce((accamulator,item) => (i % 3 === 0 || i%5 === 0) ? accamulator+item :  accamulator,0);
};

console.log(getMultiplaceThreeOrFive1(10));
*/
