"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetEffects = void 0;
var sliderElement = document.querySelector('.effect-level__slider');
var radioList = document.querySelector('.effects__list');
var valueElement = document.querySelector('.effect-level__value');
var image = document.querySelector('.img-upload__preview img');
var sliderBlock = document.querySelector('.img-upload__effect-level');
var originalRadio = document.querySelector('.effect-none');
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100
  },
  start: 80,
  connect: 'lower'
});

var updateSliderOption = function updateSliderOption(effect) {
  switch (effect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
      break;

    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        step: 0.1,
        start: 1
      });
      break;

    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        step: 1,
        start: 100
      });
      break;

    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        step: 0.1,
        start: 3
      });
      break;

    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        step: 0.1,
        start: 3
      });
      break;
  }
};

var renderEffect = function renderEffect(effect) {
  var filterStyle = '';

  switch (effect) {
    case 'chrome':
      filterStyle = "grayscale(".concat(valueElement.value, ")");
      break;

    case 'sepia':
      filterStyle = "sepia(".concat(valueElement.value, ")");
      break;

    case 'marvin':
      filterStyle = "invert(".concat(valueElement.value, "%)");
      break;

    case 'phobos':
      filterStyle = "blur(".concat(valueElement.value, "px)");
      break;

    case 'heat':
      filterStyle = "brightness(".concat(valueElement.value, ")");
      break;
  }

  image.style.filter = filterStyle;
};

sliderElement.noUiSlider.on('update', function () {
  valueElement.value = sliderElement.noUiSlider.get();
  console.log(valueElement.value);
  renderEffect(document.querySelector('.effects__radio: checked').value);
});
radioList.addEventListener('change', function (evt) {
  console.log(evt.target);

  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      sliderBlock.classList.add('hidden');
      image.style.filter = '';
    } else {
      updateSliderOption(evt.target.value);
      renderEffect(evt.currentTarget.value);
      sliderBlock.classList.remove('hidden');
    }
  }
});

var resetEffects = function resetEffects() {
  sliderBlock.classList.add('hidden');
  image.style.filter = '';
  originalRadio.checked = true;
};

exports.resetEffects = resetEffects;