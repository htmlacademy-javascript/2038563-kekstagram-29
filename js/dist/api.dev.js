"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postPhoto = void 0;

var _constants = require("./constants.js");

var postPhoto = function postPhoto(body) {
  fetch(_constants.POST_DATA_URL, {
    method: 'POST',
    //договариваемся с беком
    //body: body то же самое что след строка
    body: body
  }); //возвращает  promise
};

exports.postPhoto = postPhoto;