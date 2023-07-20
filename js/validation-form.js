import {checkString} from "./util.js";
import { MAX_DESCRIPTION_LENGHT,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS
 } from "./constants.js";

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
  false
);
const getTagsArray = (vol) => vol.replace(/ +/g,' ').trim().toLowerCase().split(' ');
const validateDescription = (vol) => checkString(vol,MAX_DESCRIPTION_LENGHT);

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длина строки не должна превышать ${MAX_DESCRIPTION_LENGHT} символов`,
  1,//пропускаем этот параметр
  true
  );

const validateHashtagVolume = (vol) => getTagsArray(vol).length <= MAX_HASHTAGS_VOLUME;//преобразовали строку
pristine.addValidator(
  hashtagsField,//поле тестим
  validateHashtagVolume,//содержание
  `Колличество  хештегов не должно превышать ${MAX_HASHTAGS_VOLUME}`,
  1,//пропускаем этот параметр
  true
);

const validateHashtag = (vol) => {
  const tags = vol.replace(/ +/g,' ').trim().split(' ');
  return !value.lenght ? true : !tags.some((el) => !HASHTAG_SYMBOLS.test(el));
};
pristine.addValidator(
  hashtagsField,//поле тестим
  validateHashtag,//содержание
  `хэш-тег начинается с символа # (решётка);
  строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэш-тега 20 символов, включая решётку;`,
  1,//пропускаем этот параметр
  true
);
const validateUniqueHashtag = (vol) => {
  const tags = getTagsArray(vol);
  const getUniqTags = [...new Set(tags)];
  return tags.length === getUniqTags.lenght;
};
pristine.addValidator(
  hashtagsField,//поле тестим
  validateUniqueHashtag,
  'Хештег не должен повторяться',
  1,//пропускаем этот параметр
  true
);
const validateForm = () => pristine.validate(); //запускает все валидаторы (он тут у нас один .addValidator)

export {validateForm};
