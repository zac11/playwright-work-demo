import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import RegisterLocator from "../locators/register.locator";


export default class RegisterUser{

    readonly page: Page;
    readonly pageurl : string;
    readonly firstName : string;
    readonly lastName : string;
    readonly email: string;
    readonly password: string;
    


    constructor(page: Page){
        this.page = page;
        this.pageurl = `https://magento.softwaretestingboard.com/customer/account/create/`;
        this.firstName = `Rahul`;
        this.lastName = `Yadav`;
        this.email = `rahul_123@ymail.com`
        this.password = `pass12@345`
    }

    async validateRegisterPage(){
        await expect(this.page).toHaveURL(this.pageurl);
    }

    async fillRegisterFields(){
        const baseMethods = new BaseMethods(this.page);
        const regiserLocator = new RegisterLocator(this.page);
        await baseMethods.fillInputValue(regiserLocator.FirstNameLocator,this.firstName);
        await baseMethods.fillInputValue(regiserLocator.SecondNameLocator,this.lastName);
        await baseMethods.fillInputValue(regiserLocator.EmailLocator,this.email);
        await baseMethods.fillInputValue(regiserLocator.Password,this.password); // encrypt at a later stage
        await baseMethods.fillInputValue(regiserLocator.ConfirmPassword, this.password);
        await baseMethods.clickOnElement(regiserLocator.CreateAccountButton);
        

    }





}