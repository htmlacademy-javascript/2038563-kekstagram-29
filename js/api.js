import {GET_DATA_URL,
   POST_DATA_URL,
   ALERT_MESSAGE,
   ALERT_MESSAGE_CATCH
  } from './constants.js';
import {showAlert} from './util.js';

const getPhotos = () =>
fetch( GET_DATA_URL)
.then((response) => {
  if (!response.ok) {
    showAlert('ALERT_MESSAGE');
    throw new Error();
  }
  return response.json();// меод забирает с сервера и правращает в обьектб с которым можно работать
})
.catch(() => {
  showAlert('ALERT_MESSAGE_CATCH');
  throw new Error();
});
;

const postPhoto = (body) =>
  fetch(POST_DATA_URL, {method: 'POST', body}); //возвращает  promise



export {postPhoto,
  getPhotos};
