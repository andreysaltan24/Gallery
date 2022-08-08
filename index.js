import { getAlbums, getPhotosList } from './api.js';

const albumsList = document.querySelector('.albums__list');
const albumsPhoto = document.querySelector('.albums__photo');

albumsList.addEventListener('click', onAlbumsListClick);

initializationAlbums();
renderPhotoFromAlbum();

function initializationAlbums() {
  getAlbums()
    .then(renderList)
    .catch(alertError);
}

function renderPhotoFromAlbum(id) {
  getPhotosList(id)
  .then(renderPhotoList);
}

function onAlbumsListClick(e) {
  const target = e.target;
  const albumEl = getItemListItem(target);
  const id = getListItemId(albumEl);
  if (albumEl) {
    renderPhotoFromAlbum(id);
  }
}

function renderList(albumEl) {
  const addList = albumEl.map(generateListHTML).join('');

  albumsList.innerHTML = addList;
}

function generateListHTML(listItem) {
  return `
          <div class='list__item' data-id=${listItem.id}>
              ${listItem.title} 
          </div>
      `;
}

function renderPhotoList(photos) {
  const photoList = photos.map(renderPhotoHTML).join('');

  albumsPhoto.innerHTML = photoList;
}

function renderPhotoHTML(photoEl) {
  return `
        <span>${photoEl.id}</span>
      `;
}


function getListItemId(el) {
  return el.dataset.id;
}

function getItemListItem(el) {
  return el.closest('.list__item');
}

function alertError(e) {
  alert(e.message);
}
