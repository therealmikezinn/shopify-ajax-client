import axios from 'axios';

class ShopifyAjaxClient {
    constructor(){
        const self = this;

        self.client = axios.create();
    }

    addToCart(items) {
        const self = this;

        return self.client.post('/cart/clear.js', items)
          .then(({ data }) => Promise.resolve(data));
    }

    clearCart() {
        const self = this;

        return self.client.post('/cart/clear.js')
          .then(({ data }) => Promise.resolve(data));
    }

    getCart() {
        const self = this;

        return self.client.get('/cart.js')
          .then(({ data }) => Promise.resolve(data));
    }

    getProduct(handle) {
        const self = this;

        return self.client.get(`/products/${handle}.js`)
          .then(({ data }) => Promise.resolve(data));
    }

    updateCart(items) {
        const self = this;

        return self.client.post('/cart/update.js', items)
          .then(({ data }) => Promise.resolve(data));
    }
}

export default ShopifyClient;
