"use strict";

var _util = require("./util.js");

var _validationForm = require("./validation-form.js");

var _scale = require("./scale.js");

var _effects = require("./effects.js");

var _api = require("./api.js");

var uploadPhoto = document.querySelector('.img-upload__input');
var uploadModalWindow = document.querySelector('.img-upload__overlay');
var buttonUploadCancel = document.querySelector('.img-upload__cancel');
var uploadForm = document.querySelector('.img-upload__form');
var uploadModalImg = document.querySelector('.img-upload__preview img');
var uploadModalEffectsPreviewItems = document.querySelector('.effects__preview');

var renderPreviewImage = function renderPreviewImage() {
  var fileImage = uploadPhoto.files[0]; // возмемься за файл, который выбрал пользователь

  uploadModalImg.src = URL.createObjectURL(fileImage); //из папки на компе у пользователя для предпросмотра без загрузки на сайт

  uploadModalEffectsPreviewItems.forEach(function (item) {
    item.style.backgroundImage = "url(\"".concat(URL.createObjectURL(fileImage), "\")");
  });
};

var showModalWindow = function showModalWindow() {
  uploadModalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  (0, _scale.resetScale)();
  (0, _effects.resetEffects)();
};

var closeModalWindow = function closeModalWindow() {
  uploadModalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset(); //---------------------------read about it
};

uploadPhoto.addEventListener('change', function () {
  showModalWindow();
});
buttonUploadCancel.addEventListener('click', function () {
  closeModalWindow();
}); //доделать закрытие esc и закрытие по шторке
//---------------библиотека
//1 отправка данных на сервер

uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if ((0, _validationForm.validateForm)()) {
    evt.preventDefault();
    (0, _api.postPhoto)(new FormData(evt.target)).then(function (responce) {
      if (responce.ok) {
        console.log('показать окно успеха');
        console.log('форму спрятать');
      } else {
        console.log('показать окно НЕуспеха');
        console.log('выбросить ошибку');
      }
    }).cath(function () {}); //2.анализ
    //3.открытие окна
    //4.успех не успех

    closeModalWindow();
  }
});

function onClickEsc(evt) {
  var isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');

  if (isFocusedInput) {
    return false;
  }

  if (evt.key === 'Escape') {
    closeModalWindow();
  }
}

;

function onClickOutside(evt) {
  if (evt.target.classList.contains('overlay')) {
    closeModalWindow();
  }
}

;