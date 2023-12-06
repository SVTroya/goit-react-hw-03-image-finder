import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const ACCESS_KEY = '40532250-7000c5ca3f9409cc384b0640a';
export const IMAGES_PER_PAGE = 12;

export const fetchImagesWithQuery = async (params) => {
  const queryOptions = {
    params: {
      key: ACCESS_KEY,
      per_page: IMAGES_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      ...params,
    },
  };

  const response = await axios.get('', queryOptions);
  return {
    totalHits: response.data.totalHits,
    images: response.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({id, smallImage: webformatURL, largeImage: largeImageURL, tags}))};
};
