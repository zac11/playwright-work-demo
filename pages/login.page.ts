import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import LoginLocators from "../locators/login.locator";



export default class LoginPage{

    readonly LoginUsername : string;
    readonly LoginPassword : string;
    readonly page: Page;
    


    constructor(page: Page){
        this.page = page;
        this.LoginUsername = `ydv.rahul05@gmail.com`;
        this.LoginPassword = `pass123@45`; // encrypt in future
    }


    async enterSuccessfullLoginCredentails(){
        const baseMethods = new BaseMethods(this.page);
        const loginlocators = new LoginLocators(this.page);
        await baseMethods.fillInputValue(loginlocators.LoginEmail, this.LoginUsername);
    }
}