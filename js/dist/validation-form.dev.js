"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateForm = void 0;

var _util = require("./util.js");

var _constants = require("./constants.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var uploadForm = document.querySelector('.img-upload__form');
var hashtagsField = document.querySelector('.text__hashtags');
var descriptionField = document.querySelector('.text__description');
var pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
}, false);

var getTagsArray = function getTagsArray(vol) {
  return vol.replace(/ +/g, ' ').trim().toLowerCase().split(' ');
};

var validateDescription = function validateDescription(vol) {
  return (0, _util.checkString)(vol, _constants.MAX_DESCRIPTION_LENGHT);
};

pristine.addValidator(descriptionField, validateDescription, "\u0414\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C ".concat(_constants.MAX_DESCRIPTION_LENGHT, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"), 1, //пропускаем этот параметр
true);

var validateHashtagVolume = function validateHashtagVolume(vol) {
  return getTagsArray(vol).length <= _constants.MAX_HASHTAGS_VOLUME;
}; //преобразовали строку


pristine.addValidator(hashtagsField, //поле тестим
validateHashtagVolume, //содержание
"\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E  \u0445\u0435\u0448\u0442\u0435\u0433\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C ".concat(_constants.MAX_HASHTAGS_VOLUME), 1, //пропускаем этот параметр
true);

var validateHashtag = function validateHashtag(vol) {
  var tags = vol.replace(/ +/g, ' ').trim().split(' ');
  return !value.lenght ? true : !tags.some(function (el) {
    return !_constants.HASHTAG_SYMBOLS.test(el);
  });
};

pristine.addValidator(hashtagsField, //поле тестим
validateHashtag, //содержание
"\u0445\u044D\u0448-\u0442\u0435\u0433 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 # (\u0440\u0435\u0448\u0451\u0442\u043A\u0430);\n  \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0441\u043B\u0435 \u0440\u0435\u0448\u0451\u0442\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0438\u0437 \u0431\u0443\u043A\u0432 \u0438 \u0447\u0438\u0441\u0435\u043B \u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u0435\u043B\u044B, \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B\u044B (#, @, $ \u0438 \u0442. \u043F.), \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u043F\u0443\u043D\u043A\u0442\u0443\u0430\u0446\u0438\u0438 (\u0442\u0438\u0440\u0435, \u0434\u0435\u0444\u0438\u0441, \u0437\u0430\u043F\u044F\u0442\u0430\u044F \u0438 \u0442. \u043F.), \u044D\u043C\u043E\u0434\u0437\u0438 \u0438 \u0442. \u0434.;\n  \u0445\u0435\u0448-\u0442\u0435\u0433 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u043E\u0434\u043D\u043E\u0439 \u0440\u0435\u0448\u0451\u0442\u043A\u0438;\n  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0445\u044D\u0448-\u0442\u0435\u0433\u0430 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0443;", 1, //пропускаем этот параметр
true);

var validateUniqueHashtag = function validateUniqueHashtag(vol) {
  var tags = getTagsArray(vol);

  var getUniqTags = _toConsumableArray(new Set(tags));

  return tags.length === getUniqTags.lenght;
};

pristine.addValidator(hashtagsField, //поле тестим
validateUniqueHashtag, 'Хештег не должен повторяться', 1, //пропускаем этот параметр
true);

var validateForm = function validateForm() {
  return pristine.validate();
}; //запускает все валидаторы (он тут у нас один .addValidator)


exports.validateForm = validateForm;