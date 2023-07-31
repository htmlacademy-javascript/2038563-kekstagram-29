"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPhotos = void 0;

var _constants = require("./constants.js");

var _util = require("./util.js");

var getId = (0, _util.createRandomIdFromRangeGenerator)(1, _constants.PHOTOS);
var getPhotoId = (0, _util.createRandomIdFromRangeGenerator)(1, _constants.PHOTOS);
var getCommentId = (0, _util.createRandomIdFromRangeGenerator)(1, _constants.COMMENTS);

var getOneComment = function getOneComment() {
  return {
    id: getCommentId(),
    avatar: "img/avatar-".concat((0, _util.getRandomInteger)(_constants.MIN_AVATAR, _constants.MAX_AVATAR), ".svg"),
    message: _constants.MESSAGE[(0, _util.getRandomInteger)(0, _constants.MESSAGE.length - 1)],
    name: _constants.NAMES[(0, _util.getRandomInteger)(0, _constants.NAMES.length - 1)]
  };
};

var getComments = function getComments(count) {
  var comments = [];

  for (var i = 0; i <= count - 1; i++) {
    comments.push(getOneComment());
  }

  return comments;
};

var getOnePhoto = function getOnePhoto() {
  return {
    id: getId(),
    url: "photos/".concat(getPhotoId(), ".jpg"),
    description: _constants.DESCRIPTIONS[(0, _util.getRandomInteger)(0, _constants.DESCRIPTIONS.length - 1)],
    likes: (0, _util.getRandomInteger)(_constants.MIN_LIKES, _constants.MAX_LIKES),
    comments: getComments((0, _util.getRandomInteger)(_constants.MIN_COMMENTS, _constants.MAX_COMMENTS))
  };
};

var getPhotos = function getPhotos(counter) {
  var photos = [];

  for (var i = 0; i <= counter - 1; i++) {
    photos.push(getOnePhoto());
  }

  return photos;
};

exports.getPhotos = getPhotos;