class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button');
        this.appLogo = page.locator('.app_logo');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validLogin(userName, userPassword){
        await this.username.fill(userName);
        await this.password.fill(userPassword);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage}