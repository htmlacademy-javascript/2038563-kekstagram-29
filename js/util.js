export {ALERT_SHOW_TIME} from './constants.js'

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

// генерация случайного числа с повторами
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генерация случайного числа с контролем (без) повторений
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
//--------------------------------------------
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
  setTimeout(( ) => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME)
};

//------------------------------многократное нажатие кнопки убираем 'дребезг"

const debounce =  (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const checkString = (str, limit) => str.length <= limit;

export {
  isEscapeKey,
  createRandomIdFromRangeGenerator,
  getRandomInteger,
  checkString,
  showAlert,
  debounce
};
