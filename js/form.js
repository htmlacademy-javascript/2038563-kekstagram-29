import { isEscapeKey } from './util.js';
import {
  validateForm,
  resetValidation
} from './validation-form.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { postPhoto } from './api.js';
import { showPopup } from './popup.js';
import { SubmitButtonText } from './constants.js';


const uploadPhoto = document.querySelector('.img-upload__input');
const uploadModalWindow = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const uploadModalImg = document.querySelector('.img-upload__preview img');
const uploadModalEffectsPreviewItems = document.querySelectorAll('.effects__preview');
const uploadSubmit = document.querySelector('.img-upload__submit');

const renderPreviewImage = () => {
  const fileImage = uploadPhoto.files[0];
  uploadModalImg.src = URL.createObjectURL(fileImage);
  uploadModalEffectsPreviewItems.forEach((item) => {
    item.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const showModalWindow = () => {
  uploadModalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  document.addEventListener('keydown', onClickEsc);
  uploadModalWindow.addEventListener('click', onClickOutside);
  resetEffects();
  resetScale();

};

const closeModalWindow = () => {
  uploadModalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEsc);
  uploadModalWindow.removeEventListener('click', onClickOutside);
  uploadForm.reset();
  resetValidation();
};


uploadPhoto.addEventListener('change', () => {
  showModalWindow();
});

buttonUploadCancel.addEventListener('click', () => {
  closeModalWindow();
});

const disableSubmitButton = (isDisable = true) => {
  uploadSubmit.textContent = isDisable ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
  uploadSubmit.disabled = isDisable;
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    disableSubmitButton();
    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          showPopup('success');
          closeModalWindow();

        } else {
          showPopup('error');
        }

      })
      .catch(() => {
        showPopup('error');
      })
      .finally(() => {
        disableSubmitButton(false);
      });
  }
});

function onClickEsc(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if (isEscapeKey) {
    closeModalWindow();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeModalWindow();
  }
}

export { onClickEsc };
