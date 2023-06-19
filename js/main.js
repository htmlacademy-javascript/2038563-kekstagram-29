/*
id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
*/

const PHOTOS = 25;

const MIN_LIKES = 0;
const MAX_LIKES = 999;

const DESCRIPTIONS = [
  'утро',
  'котик',
  'масик',
  'пупсик',
  'закат в Париже',
];
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 12;

const MESSAGE= [
  'прекрасно',
  'неплохо',
  'полное г***о',
  'что за шляпа?'
];

const COMMENTS = 500;

const MIN_AVATAR = 1;
const MAX_AVATAR = 100;

const NAMES = [
  'Виктория',
  'Иван',
  'Коля',
  'Настя',
  'Маруся'
];


//генерация случайного числа
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// генерация случайного числа (без повторов)
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
  id: getCommentId(),
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

console.log(getPhotos(PHOTOS));
