import { Page,Locator } from "@playwright/test";


export default class LoginLocators{

    readonly LoginEmail : Locator;
    readonly LoginPassword : Locator;
    readonly LoginBtn : Locator;


    constructor(page : Page){
        this.LoginEmail = page.locator(`#input-email`);
        this.LoginPassword = page.locator(`#input-password`);
        this.LoginBtn = page.locator(`input[value='Login']`);
    }
}