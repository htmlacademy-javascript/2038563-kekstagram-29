"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClickEsc = onClickEsc;
exports.onClickOutside = onClickOutside;
exports.openBigPhoto = void 0;

var _util = require("./util.js");

var _constants = require("./constants.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var photoContainer = document.querySelector('.pictures');
var bigPhoto = document.querySelector('.big-picture');
var buttonCloseBigPhoto = document.querySelector('.big-picture__cancel');
var imageInBigPhoto = bigPhoto.querySelector('.big-picture__img img');
var likesInBigPhoto = bigPhoto.querySelector('.social__likes');
var titleInBigPhoto = bigPhoto.querySelector('.social__caption');
var commentsInBigPhoto = bigPhoto.querySelector('.comments-count');
var commentItemInBIgPhoto = bigPhoto.querySelector('.social__comment');
var commentContainerInBIgPhoto = bigPhoto.querySelector('.social__comments'); //for more-comments module

var commentsInBigPhotoCount = bigPhoto.querySelector('.social__comment-count');
var commentsLoader = bigPhoto.querySelector('.social__comments-loader');
var commentsList = [];
var commentsVolume = 0;

var renderButtonLoader = function renderButtonLoader() {
  if (!commentsList.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

var renderStatistic = function renderStatistic() {
  commentsInBigPhotoCount.innerHTML = "".concat(commentsVolume - commentsList.length, " \u0438\u0437 <span class=\"comments-count\">").concat(commentsVolume, "</span> \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432");
}; //----------------------------------------


var renderOneComment = function renderOneComment(item) {
  var commentElement = commentItemInBIgPhoto.cloneNode(true);
  commentElement.querySelector('.social__picture').src = item.avatar;
  commentElement.querySelector('.social__text').textContent = item.message;
  commentElement.querySelector('.social__picture').textContent = item.name;
  return commentElement;
};

var renderCommentsInBIgPhoto = function renderCommentsInBIgPhoto() {
  var fragment = document.createDocumentFragment();
  commentsList.splice(0, _constants.COMMENTS_DOSE).forEach(function (e) {
    fragment.append(renderOneComment(e));
  });
  commentContainerInBIgPhoto.append(fragment); //вставляем строку эту аппендом

  renderButtonLoader();
  renderStatistic();
};

var openBigPhoto = function openBigPhoto(elem) {
  document.body.classList.add('modal-open'); //удаляем второй скролл

  commentsVolume = elem.comments.length;
  commentContainerInBIgPhoto.innerHTML = ''; //чистим контейнер перед тем как вставить в него фрагмент

  bigPhoto.classList.remove('hidden');
  imageInBigPhoto.src = elem.url;
  likesInBigPhoto.textContent = elem.likes;
  titleInBigPhoto.textContent = elem.description;
  commentsList.length = 0; //обнулили массив

  commentsList.push.apply(commentsList, _toConsumableArray(elem.comments.slice()));
  renderCommentsInBIgPhoto(elem.comments);
  document.addEventListener('keydown', onClickOutside);
  document.addEventListener('keydown', onClickEsc);
}; //for more-comments


exports.openBigPhoto = openBigPhoto;
commentsLoader.addEventListener('click', function (evt) {
  evt.preventDefault();
  renderCommentsInBIgPhoto();
}); //---------------------------------------------------

var closeBigPhoto = function closeBigPhoto() {
  document.body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  document.removeEventListener('keydown', onClickEsc);
  document.removeEventListener('keydown', onClickOutside);
};

buttonCloseBigPhoto.addEventListener('click', function (evt) {
  closeBigPhoto();
});
/*document.addEventListener('keydown',  (evt) =>{
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
});
----вариант  из ретро-------
*/

function onClickEsc(evt) {
  if (evt.key === 'Escape') {
    closeBigPhoto();
  }
}

;

function onClickOutside(evt) {
  if (evt.target.classList.contains('overlay')) {
    closeBigPhoto();
  }
}

;