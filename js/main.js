import {getPhotos} from './data.js';
import {PHOTOS} from './constants.js';
import {renderThumbnails} from './thumbnail.js';
import './form.js';

renderThumbnails(getPhotos(PHOTOS));

