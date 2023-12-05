import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const ACCESS_KEY = '40532250-7000c5ca3f9409cc384b0640a';
export const IMAGES_PER_PAGE = 12;

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const queryOptions = {
    params: {
      q: searchQuery,
      key: ACCESS_KEY,
      page: page,
      per_page: IMAGES_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  };

  const response = await axios.get('', queryOptions);
  return response.data;
};
