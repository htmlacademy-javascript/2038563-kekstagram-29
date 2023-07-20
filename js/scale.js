import {
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE
} from './constants.js';

const minus = document.querySelector('.scale__control--smaller');
const plus = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const previewLoadingImage = document.querySelector('.img-upload__preview img');

let scale;



const onMinusClick = () => {
  scale  = scale - SCALE_STEP >= MIN_SCALE ?
  scale - SCALE_STEP : MIN_SCALE;
  // добавить disabled при минимальном размере scale
  renderScale();
};
const onPlusClick = () => {
  scale  = scale + SCALE_STEP <= MAX_SCALE ?
  scale + SCALE_STEP : MAX_SCALE;
   // добавить disabled при минимальном размере scale
  renderScale();
};

minus.addEventListener('click', onMinusClick);
plus.addEventListener('click', onPlusClick);

const renderScale = () => {
  scaleControl.value = `${scale}%`;
  previewLoadingImage.style = `transform: scale(${scale*0.01})`;
  if(scale === MIN_SCALE) {
    minus.disabled = true;
  } else {
    minus.disabled = false;
  };

  if(scale === MAX_SCALE) {
    plus.disabled = true;
  } else {
    plus.disabled = false;
  };
};



const resetScale = () => {
  scale = MAX_SCALE;
  renderScale();
};

export {resetScale};
