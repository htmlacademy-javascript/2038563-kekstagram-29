const COMMENTS_DOSE = 5;

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_VOLUME = 5;
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;

const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram';
const GET_DATA_URL = 'https://28.javascript.pages.academy/kekstagram/data';

const ALERT_MESSAGE = 'Что-то пошло не так..!!!';
const ALERT_MESSAGE_CATCH = 'Что-то не так c адресом строки..!!!';
const ALERT_SHOW_TIME = 5000;

const RANDOM_PHOTOS_VALUE = 10;

const RENDER_DELAY = 500;

const EffectsOptions = {
  CHROME: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  SEPIA: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  MARVIN: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  },
  PHOBOS: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
  HEAT: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  }
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
};


export {
  COMMENTS_DOSE,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  POST_DATA_URL,
  GET_DATA_URL,
  ALERT_MESSAGE,
  ALERT_SHOW_TIME,
  ALERT_MESSAGE_CATCH,
  RANDOM_PHOTOS_VALUE,
  RENDER_DELAY,
  SubmitButtonText,
  EffectsOptions
};
