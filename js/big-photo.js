import { isEscapeKey } from './util.js';
import { COMMENTS_DOSE } from './constants.js';

const bigPhoto = document.querySelector('.big-picture');
const buttonCloseBigPhoto = document.querySelector('.big-picture__cancel');

const imageInBigPhoto = bigPhoto.querySelector('.big-picture__img img');
const likesInBigPhoto = bigPhoto.querySelector('.social__likes');
const titleInBigPhoto = bigPhoto.querySelector('.social__caption');

const commentItemInBIgPhoto = bigPhoto.querySelector('.social__comment');
const commentContainerInBIgPhoto = bigPhoto.querySelector('.social__comments');

const commentsInBigPhotoCount = bigPhoto.querySelector('.social__comment-count');

const commentsLoader = bigPhoto.querySelector('.social__comments-loader');

const comments = [];
let commentsVolume = 0;

const renderButtonLoader = () => {
  if (!comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const renderStatistic = () => {
  commentsInBigPhotoCount.innerHTML = `${commentsVolume - comments.length} из <span class="comments-count">${commentsVolume}</span> комментариев`;
};

const renderOneComment = (item) => {
  const commentElement = commentItemInBIgPhoto.cloneNode(true);
  commentElement.querySelector('.social__picture').src = item.avatar;
  commentElement.querySelector('.social__text').textContent = item.message;
  commentElement.querySelector('.social__picture').textContent = item.name;
  return commentElement;
};

const renderCommentsInBIgPhoto = () => {
  const fragment = document.createDocumentFragment();
  comments.splice(0, COMMENTS_DOSE).forEach((e) => {
    fragment.append(renderOneComment(e));
  });

  commentContainerInBIgPhoto.append(fragment);
  renderButtonLoader();
  renderStatistic ();
};

const openBigPhoto = (elem) => {
  document.body.classList.add('modal-open');
  commentsVolume = elem.comments.length;
  commentContainerInBIgPhoto.innerHTML = '';
  bigPhoto.classList.remove('hidden');
  imageInBigPhoto.src = elem.url;
  likesInBigPhoto.textContent = elem.likes;
  titleInBigPhoto.textContent = elem.description;

  comments.length = 0;
  comments.push(...elem.comments.slice());

  renderCommentsInBIgPhoto(elem.comments);
  document.addEventListener('keydown', onClickOutside);
  document.addEventListener('keydown', onClickEsc);
};

commentsLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderCommentsInBIgPhoto();
});

const closeBigPhoto = () => {
  document.body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  document.removeEventListener('keydown', onClickEsc);
  document.removeEventListener('keydown', onClickOutside);
};

buttonCloseBigPhoto.addEventListener('click', () => {
  closeBigPhoto();
});

function onClickEsc () {
  if (isEscapeKey) {
    closeBigPhoto();
  }
}

function onClickOutside (evt) {
  if (evt.target.classList.contains('overlay')){
    closeBigPhoto();
  }
}

export {openBigPhoto, onClickEsc, onClickOutside};


