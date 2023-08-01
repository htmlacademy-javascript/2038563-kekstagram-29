import {checkString} from './util.js';
import { MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS} from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'form__error'
  },
  true
);
const getTagsArray = (val) => val.replace(/ +/g,' ').trim().toLowerCase().split(' ');
const validateDescription = (val) => checkString(val,MAX_DESCRIPTION_LENGTH);

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длина строки не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`,
  1,
  true
);

const validateHashtagVolume = (val) => getTagsArray(val).length <= MAX_HASHTAGS_VOLUME;

pristine.addValidator(
  hashtagsField,
  validateHashtagVolume,
  `Колличество  хештегов не должно превышать ${MAX_HASHTAGS_VOLUME}`,
  1,
  true
);

const validateHashtag = (value) => {
  const tags = value.replace(/ +/g,' ').trim().split(' ');
  return !value.length ? true : !tags.some((el) => !HASHTAG_SYMBOLS.test(el));
};
pristine.addValidator(
  hashtagsField,
  validateHashtag,
  `хэш-тег начинается с символа # (решётка);
  строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэш-тега 20 символов, включая решётку;`,
  1,
  true
);

const validateUniqueHashtag = (vol) => {
  const tags = getTagsArray(vol);
  const getUniqTags = [...new Set(tags)];
  return tags.length === getUniqTags.length;
};
pristine.addValidator(
  hashtagsField,
  validateUniqueHashtag,
  'Хештег не должен повторяться',
  1,
  true
);

const validateForm = () => pristine.validate();

const resetValidation = () => {
  pristine.reset();
};

export {
  validateForm,
  resetValidation
};
