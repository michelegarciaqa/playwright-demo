const { expect } = require("playwright/test");

class CartPage{
    constructor(page){
        this.page = page;
        this.cartItems = page.locator('.inventory_item_name');
        this.checkout = page.locator('#checkout');
    }

    async getItems(productName){
        expect(this.cartItems).toContainText(productName);
        await this.checkout.click();
    }

    async checkItems(productName){
        expect(this.cartItems).toContainText(productName);
    }
}

module.exports = {CartPage}