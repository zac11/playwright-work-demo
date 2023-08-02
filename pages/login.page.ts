import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import LoginLocators from "../locators/login.locator";
import TopHeaderLocator from "../locators/topBar.locator";
import { persons } from '../data/searchQueryJson.json';


export default class LoginPage{
    readonly page: Page;
    readonly LoginUsername : string;
    readonly LoginPassword : string;
    readonly pageurl : string;
    


    constructor(page: Page){
        this.page = page;
        this.LoginUsername = `ydv.rahul05@gmail.com`;
        this.LoginPassword = `pass123@45`; // encrypt in future
        this.pageurl = `https://tutorialsninja.com/demo/index.php?route=account/login`;
    }

    async goToLoginPage(){
        const baseMethods = new BaseMethods(this.page);
        const topHeader = new TopHeaderLocator(this.page); 
        await baseMethods.goToURL();
        await baseMethods.clickOnElement(topHeader.MyAccount);
        await baseMethods.clickOnElement(topHeader.Login);
        await this.page.waitForTimeout(3000);
        await this.validateLoginpage();
        
    }

    async validateLoginpage(){
        await expect(this.page).toHaveURL(this.pageurl);
    }


    async enterSuccessfullLoginCredentails(){
        const baseMethods = new BaseMethods(this.page);
        const loginlocators = new LoginLocators(this.page);
        await baseMethods.fillInputValue(loginlocators.LoginEmail, this.LoginUsername);
    }

  
}