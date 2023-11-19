const randomInteger = (min, max) => Math.floor(Math.random()*(max - min + 1) - min);

const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc'
};

const isEscapeKey = (evt) => evt.key === Keys.ESCAPE || evt.key === Keys.ESC;

const closeOnEscKeyDown = (evt, cb) => {
  if (isEscapeKey(evt)) {
    cb();
  }
};

export{randomInteger};
export{closeOnEscKeyDown};
