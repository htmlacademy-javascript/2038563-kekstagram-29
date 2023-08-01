import {getPhotos} from './api.js';
import './form.js';
import { setFilters } from './filter.js';

getPhotos().then((photos) => {
  setFilters(photos);
});


