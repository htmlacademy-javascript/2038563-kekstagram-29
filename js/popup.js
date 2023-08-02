import { isEscapeKey } from './util.js';
import { onClickEsc } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const popupTemplates = {
  success: successTemplate,
  error: errorTemplate
};

const onClosePopup = () => {
  if (document.querySelector('.popup').classList.contains('error')) {
    document.addEventListener('keydown', onClickEsc);
  }
  document.removeEventListener('keydown', onEscapePopup);
  document.querySelector('.popup').remove();
};

const showPopup = (popupType) => {
  const popupElement = popupTemplates[popupType].cloneNode(true);
  popupElement.classList.add('popup');
  popupElement.addEventListener('click', onClickOutside);
  document.body.append(popupElement);
  const popupButton = document.querySelector(`.${popupType}__button`);
  popupButton.addEventListener('click', onClosePopup);
  document.addEventListener('keydown', onEscapePopup);
  if(popupType === 'error') {
    document.removeEventListener('keydown', onClickEsc);
  }
};

function onEscapePopup() {
  if (isEscapeKey) {
    onClosePopup();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    onClosePopup();
  }
}

export {
  showPopup
};
