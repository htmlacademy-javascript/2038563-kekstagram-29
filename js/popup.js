import { isEscapeKey } from './util.js';
import {onClickEsc} from './form.js';

const successTemplate  = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showPopupSuccess = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  successPopupElement.classList.add('popup');
  const succesButton = document.querySelector('.success__button');
  succesButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onClickEsc);
  document.addEventListener('click', onClickOutside);
};

const showPopupError = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  errorPopupElement.classList.add('popup');
  document.body.append(errorPopupElement);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onClickEsc);
  document.addEventListener('click', onClickOutside);
};

const closePopup = () => {
  document.querySelector('.popup').remove();

  document.removeEventListener('keydown', onClickEsc);
  document.removeEventListener('click', onClickOutside);
  document.addEventListener('keydown', onClickPopupEsc);
};

function onClickPopupEsc(evt) {
  if (isEscapeKey) {
    closePopup();
  }
};

function onClickOutside(evt) {
  if (evt.target.classList.contains('success')|| evt.target.classList.contains('error')) {
    closePopup();
  }
};

export {
  showPopupSuccess,
  showPopupError
};
