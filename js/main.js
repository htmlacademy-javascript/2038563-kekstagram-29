import {getPhotos} from './api.js';
import {renderThumbnails} from './thumbnail.js';
import './form.js';
import { setFilters } from './filter.js';

getPhotos().then((photos) => {
  //renderThumbnails(photos);//запускается после фильтров уже
  setFilters(photos);//показать *перламутровые пуговицы* фильтрация фото
});


