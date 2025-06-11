`use strict`;
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
  
const galleryContainer = document.querySelector('.gallery');
export function createGallery(images) {
    const markгp = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p>Likes: ${likes}</p>
            <p>Views: ${views}</p>
            <p>Comments: ${comments}</p>
            <p>Downloads: ${downloads}</p>
          </div>
        </li>
      `;
    }).join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);
lightbox.refresh();
}

export function clearGallery() {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
  }