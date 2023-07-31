"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetScale = void 0;

var _constants = require("./constants.js");

var minus = document.querySelector('.scale__control--smaller');
var plus = document.querySelector('.scale__control--bigger');
var scaleControl = document.querySelector('.scale__control--value');
var previewLoadingImage = document.querySelector('.img-upload__preview img');
var scale;

var onMinusClick = function onMinusClick() {
  scale = scale - _constants.SCALE_STEP >= _constants.MIN_SCALE ? scale - _constants.SCALE_STEP : _constants.MIN_SCALE; // добавить disabled при минимальном размере scale

  renderScale();
};

var onPlusClick = function onPlusClick() {
  scale = scale + _constants.SCALE_STEP <= _constants.MAX_SCALE ? scale + _constants.SCALE_STEP : _constants.MAX_SCALE; // добавить disabled при минимальном размере scale

  renderScale();
};

minus.addEventListener('click', onMinusClick);
plus.addEventListener('click', onPlusClick);

var renderScale = function renderScale() {
  scaleControl.value = "".concat(scale, "%");
  previewLoadingImage.style = "transform: scale(".concat(scale * 0.01, ")");

  if (scale === _constants.MIN_SCALE) {
    minus.disabled = true;
  } else {
    minus.disabled = false;
  }

  ;

  if (scale === _constants.MAX_SCALE) {
    plus.disabled = true;
  } else {
    plus.disabled = false;
  }

  ;
};

var resetScale = function resetScale() {
  scale = _constants.MAX_SCALE;
  renderScale();
};

exports.resetScale = resetScale;