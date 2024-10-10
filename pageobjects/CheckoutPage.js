const { expect } = require("playwright/test");

class CheckoutPage{
    constructor(page){
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');
        this.continue = page.locator('#continue');
        this.finish = page.locator('#finish')
        this.orderMessage  = page.locator('.complete-header ')
    }

    async fillCheckoutInformation(firstName, lastName, zipCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continue.click();
        await this.page.waitForLoadState('networkidle');
    }

    async finishOrder(thankYouMessage){
        await this.finish.click();
        await this.page.waitForLoadState('networkidle');
        expect(this.orderMessage).toContainText(thankYouMessage)
    }
}

module.exports = {CheckoutPage}