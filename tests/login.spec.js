const {test} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const data = JSON.parse(JSON.stringify(require('../utils/data.json')))

test('Valid Login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.validLogin(data.userName, data.userPassword, data.expectedTittle);
})