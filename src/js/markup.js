import menuList from '../menu.json';
import cardTemplate from '../templates/templates.hbs'

const menuEl = document.querySelector('.js-menu');

const itemGallery = menuList.map(cardTemplate).join('');

menuEl.insertAdjacentHTML('beforeend',itemGallery );