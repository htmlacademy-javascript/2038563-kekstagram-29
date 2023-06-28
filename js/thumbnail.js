
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const  pictureFragment = document.createDocumentFragment();

const renderThumbnails = (pictures) => {
  pictures.forEach((item) => {
    console.log(item);
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__img').alt = item.description;
    pictureElement.querySelector('.picture__comments').textContent = item.comments.lenght;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;

    pictureFragment.append(pictureElement);
  });
  pictureContainer.append(pictureFragment);
};



export {renderThumbnails}

