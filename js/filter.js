import {renderThumbnails} from './thumbnail.js';
import {RANDOM_PHOTOS_VALUE, RENDER_DELAY} from './constants.js';
import {removeChatter} from './util.js';

const filterElement = document.querySelector('.img-filters');
const showFilters = () => {};
filterElement.classList.remove('img-filters--inactive');

const setFilterButton = (filterButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  filterButton.classList.add('img-filters__button--active');
};

const filterPhotos = (filter, photos) => {
  switch(filter) {
    case 'filter-default': return photos;
    case 'filter-random': return [...photos].sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTOS_VALUE);
    case 'filter-discussed': return [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }
};
const setFilters = (photos) => {
  showFilters();
  renderThumbnails(photos);

  filterElement.addEventListener('click', removeChatter((evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      const id = evt.target.id;
      renderThumbnails(filterPhotos(id, photos));
      setFilterButton(evt.target);
    }
  },RENDER_DELAY));
};

export {setFilters};
