import axios from 'axios';

class ShopifyAjaxClient {
    constructor(){
        const self = this;

        self.client = axios.create();
    }

    addToCart(items) {
        const self = this;

        return self.client.post('/cart/clear.js', items);
    }

    clearCart() {
        const self = this;

        return self.client.post('/cart/clear.js');
    }

    getCart() {
        const self = this;

        return self.client.get('/cart.js');
    }

    getProduct(handle) {
        const self = this;

        return self.client.get(`/products/${handle}.js`)
    }

    updateCart(items) {
        const self = this;

        return self.client.post('/cart/update.js', items);
    }
}

export default ShopifyClient;
