import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast'; 

const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();
  if (!searchQuery) {
    iziToast.error({
      title: 'Warning',
      message: `Image not found`,
      position: 'topRight',
      backgroundColor: 'orange',
    });
    form.reset(); 
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
      form.reset(); 
      return; 
    }

    createGallery(data.hits);
    form.reset(); 

  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});
