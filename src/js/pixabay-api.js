import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '50743656-f34c73b2fc7295c80e7e7c3d4';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true, 
      },
    });

    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
    });

    throw error; 
  }
}