import {getPhotos} from './data.js';
import {PHOTOS} from './constants.js';
import {renderThumbnails} from './thumbnail.js';
import './form.js';
import './scale.js';

renderThumbnails(getPhotos(PHOTOS));

