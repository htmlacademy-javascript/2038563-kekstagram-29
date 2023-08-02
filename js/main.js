import { getPhotos } from './api.js';
import './form.js';
import { setFilters } from './filter.js';
import {
  ALERT_MESSAGE, 
  ALERT_MESSAGE_CATCH
} from './constants.js';
import {showAlert} from './util.js';

getPhotos()
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      showAlert(ALERT_MESSAGE);
      throw new Error();
    } 
  }).then((photos) => {
    setFilters(photos);
  })
  .catch(() => {
    showAlert(ALERT_MESSAGE_CATCH);
  });


