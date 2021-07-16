import axios from 'axios';

export const itemsAPI = {
    getItems() {
        return axios.get('https://60e8fd92673e350017c21967.mockapi.io/items');
    }
};

export const cartAPI = {
    getCart() {
        return axios.get('https://60e8fd92673e350017c21967.mockapi.io/cart');
    },
    addItemToCart(item) {
        return axios.post('https://60e8fd92673e350017c21967.mockapi.io/cart', item);
    },
    deleteItemFromCart(id) {
        return axios.delete(`https://60e8fd92673e350017c21967.mockapi.io/cart/${id}`, undefined);
    }
};

export const favoriteAPI = {
    getFavorite() {
        return axios.get('https://60e8fd92673e350017c21967.mockapi.io/favorite');
    },
    addItem(item) {
        return axios.post('https://60e8fd92673e350017c21967.mockapi.io/favorite', item);
    },
    deleteItem(id) {
        return axios.delete(`https://60e8fd92673e350017c21967.mockapi.io/favorite/${id}`, undefined);
    }
};