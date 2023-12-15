const SHOW_TIME = 5000;

import {loadData} from './fetch.js';
import {showAlert} from './util.js';
import {renderPictures} from './pictures.js';
import './form.js';
import './hashtags-pristine.js';
import './message.js';
import './filter.js';
import {initEffects} from './effects.js';

initEffects();

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = () => {
  showAlert('Ошибка загрузки', SHOW_TIME);
};

loadData(onSuccess, onFail);

export {photos};
