import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '34705892-669dd2f6873906b97fad21686';

const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
});

class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    try {
      const response = await axios.get(
        `${BASE_URL}${searchParams}&q=${this.searchQuery}&page=${this.page}`
      );
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.log(error);
    }

    // const url = `${BASE_URL}${searchParams}&q=${this.searchQuery}&page=${this.page}`;

    // return fetch(url).then(response => {
    //   if (!response.ok) {
    //     throw new Error(response.status);
    //   }
    //   this.incrementPage();
    //   return response.json();
    // });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export { ImagesApiService };
