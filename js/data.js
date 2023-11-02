import {randomInteger} from './util.js';

const COUNT_PHOTOS = 25;
const photos = [];
const comments = [];

const LIKES = {
  MIN: 15,
  MAX: 200
};

const COUNT_AVATARS = {
  MIN : 1,
  MAX : 6
};

const COUNT_COMMENTS = {
  MIN: 0,
  MAX: 30
};

const NAMES = [
  'Иван',
  'Екатерина',
  'Мария',
  'Виктор',
  'Юлия',
];

const DESCRIPTIONS = [
  'Осенняя прогулка в парке',
  'Завтрак в кофейне',
  'Звездная ночь',
  'Вечер с друзьями',
  'Семейный ужин',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const addComment = (i) => ({
  id: i,
  avatar: `img/avatar-${randomInteger(COUNT_AVATARS.MIN, COUNT_AVATARS.MAX)}.svg`,
  message: MESSAGES[randomInteger(0, MESSAGES.length - 1)],
  name: NAMES[randomInteger(0,NAMES.length - 1)],

});

const addComments = () => {
  for (let i = 0; i < randomInteger(COUNT_COMMENTS.MIN, COUNT_COMMENTS.MAX) ; i++){
    comments.push(addComment(i));
  }
};

const addPhoto = (index) => ({
  id: index,
  url: `photos/${index +1}.jpg`,
  description: DESCRIPTIONS[randomInteger(0, DESCRIPTIONS.length - 1)],
  likes: randomInteger(LIKES.MIN, LIKES.MAX),
  comments: addComments()

});

const addPhotos = () => {
  for (let i = 0; i < COUNT_PHOTOS; i++){
    photos.push(addPhoto(i));
  }
};

const images = addPhotos();
export {images};


