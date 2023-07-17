import { isEscapeKey } from "./util.js";
import {validateForm} from "./validation-form.js";

const uploadPhoto = document.querySelector('.img-upload__input');
const uploadModalWindow = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const uploadModalImg = document.querySelector('.img-upload__preview img');
const uploadModalEffectsPreviewItems = document.querySelector('.effects__preview');

const renderPreviewImage = () => {
  const fileImage = uploadPhoto.files[0];// возмемься за файл, который выбрал пользователь
  uploadModalImg.src = URL.createObjectURL(fileImage);//из папки на компе у пользователя для предпросмотра без загрузки на сайт
  uploadModalEffectsPreviewItems.forEach((item) => {
    item.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const showModalWindow = () => {
  uploadModalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
};

const closeModalWindow = () => {
  uploadModalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset(); //---------------------------read about it
};


uploadPhoto.addEventListener('change', () => {
  showModalWindow();

});

buttonUploadCancel.addEventListener('click', () => {
  closeModalWindow();
});
//доделать закрытие esc и закрытие по шторке


//---------------библиотека
uploadForm.addEventListener ('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    //отправка данных на сервер
    //анализ
    //открытие окна
    // успех не успех
    closeModalWindow();
  }
});
function onClickEsc (evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if (evt.key === 'Escape') {
    closeModalWindow();
  }
};

function onClickOutside (evt) {
  if (evt.target.classList.contains('overlay')){
    closeModalWindow();
  }
};
