class InventoryPage{
    constructor(page, productName){
        this.page = page;
        this.selectProduct = page.locator(`.inventory_item_name[data-test="inventory-item-name"]:has-text("${productName}")`);
        this.addToCart = page.locator('#add-to-cart');
        this.cart = page.locator('#shopping_cart_container');

    }
    async selectProductToCart() {
        await this.selectProduct.click();
        await this.addToCart.click();
        await this.cart.click();        
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {InventoryPage}