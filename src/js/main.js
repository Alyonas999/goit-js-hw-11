import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions.js';
import { getImagesByQuery } from './pixabay-api.js';

const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();
  if (!searchQuery) return;

  clearGallery();
  showLoader();

  try {
      const data = await getImagesByQuery(searchQuery);
      
    if (data.hits.length === 0) {
      throw new Error('No images found');
    }
      createGallery(data.hits);
      
  } catch (error) {
    console.error(error);

  } finally {
    hideLoader();
  }
});