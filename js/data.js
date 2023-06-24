import {
PHOTOS,
MIN_LIKES,
MAX_LIKES,
DESCRIPTIONS,
MIN_COMMENTS,
MAX_COMMENTS,
MESSAGE,
COMMENTS,
MIN_AVATAR,
MAX_AVATAR,
NAMES,
} from './constants.js';

// генерация случайного числа с повторами
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генерация случайного числа с контролем (без) повторений
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
//--------------------------------------------
const getId = createRandomIdFromRangeGenerator(1, PHOTOS);

const getPhotoId = createRandomIdFromRangeGenerator(1, PHOTOS);

const getCommentId = createRandomIdFromRangeGenerator(1, COMMENTS);

const getOneComment = () => ({
id: getCommentId(),
avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
message: MESSAGE[getRandomInteger(0, MESSAGE.length-1)],
name: NAMES[getRandomInteger(0, NAMES.length-1)]
});

const getComments = (count) => {
  const comments = [];

  for (let i=0; i<= count-1; i++) {
    comments.push(getOneComment());
  }
  return comments;
};

const getOnePhoto = () => ({
  id: getId(),
  url: `photos/${getPhotoId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length-1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments( getRandomInteger(MIN_COMMENTS, MAX_COMMENTS))
});

const getPhotos = (counter) => {
  const photos = [];

  for (let i=0; i <= counter-1; i++ ) {
    photos.push(getOnePhoto())
  }
  return photos;
};


export {getPhotos};
