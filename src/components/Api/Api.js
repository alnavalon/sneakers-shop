import axios from 'axios';

export const itemsAPI = {
    getItems() {
        return axios.get('https://60e8fd92673e350017c21967.mockapi.io/items');
    }
};