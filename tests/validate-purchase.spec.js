const {test} = require('@playwright/test');
const {InventoryPage} = require('../pageobjects/InventoryPage');
const {LoginPage} = require('../pageobjects/LoginPage');
const {CartPage} = require('../pageobjects/CartPage');
const {CheckoutPage} = require('../pageobjects/CheckoutPage');
const data = JSON.parse(JSON.stringify(require('../utils/data.json')))

let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.validLogin(data.userName, data.userPassword, data.expectedTittle);
});

test('Validate purchase of Sauce Labs Bolt T-Shirt', async({page}) => {
    const productName = data.productName;
    const inventoryPage = new InventoryPage(page, productName);
    await inventoryPage.selectProductToCart();
    const cartPage = new CartPage(page);
    await cartPage.getItems(productName);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutInformation(data.firstName, data.lastName, data.zipCode);
    await cartPage.checkItems(productName);
    await checkoutPage.finishOrder(data.thankYouMessage);
})