import {getPhotos} from './data.js';
import {PHOTOS} from './constants.js';
import {renderThumbnails} from './thumbnail.js';


renderThumbnails(getPhotos(PHOTOS));

