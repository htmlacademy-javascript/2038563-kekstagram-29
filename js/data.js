import {
PHOTOS,
MIN_LIKES,
MAX_LIKES,
MIN_COMMENTS,
MAX_COMMENTS,
COMMENTS,
MIN_AVATAR,
MAX_AVATAR
} from './constants.js';
import {createRandomIdFromRangeGenerator,getRandomInteger} from './util.js'


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
