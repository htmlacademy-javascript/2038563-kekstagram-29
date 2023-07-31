"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderThumbnails = void 0;

var _bigPhoto = require("./big-photo.js");

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
var pictureContainer = document.querySelector('.pictures');
var pictureFragment = document.createDocumentFragment();

var renderThumbnails = function renderThumbnails(pictures) {
  pictures.forEach(function (element) {
    console.log(element);
    var pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.id = element.id; //возможность связать по айдишнику данные одной конкретн карточки

    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__img').alt = element.description;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureFragment.append(pictureElement);
  });
  pictureContainer.append(pictureFragment);
  pictureContainer.addEventListener('click', function (evt) {
    //погружение и выбираем классом выше ближайший
    if (evt.target.classList.contains('picture__img')) {
      var id = evt.target.closest('.picture').dataset.id;
      var picture = pictures.find(function (el) {
        return el.id === id * 1;
      }); // умножение превратит строку в число, сложение наоборот

      (0, _bigPhoto.openBigPhoto)(picture);
    }

    ;
  });
};

exports.renderThumbnails = renderThumbnails;