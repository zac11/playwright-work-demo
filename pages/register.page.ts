import { Page, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import BaseMethods from "./baseMethods.page";
import RegisterLocator from "../locators/register.locator";
import TopHeaderLocator from "../locators/topBar.locator";


export default class RegisterUser{

    readonly page: Page;
    readonly pageurl : string;
    readonly firstName : string;
    readonly lastName : string;
    readonly email: string;
    readonly password: string;
    readonly telephone : string;
    readonly createdaccounturl : string;
    readonly successMessage : string;
    readonly medium_timeout : number;
    


    constructor(page: Page){
        this.page = page;
        this.pageurl = `https://tutorialsninja.com/demo/index.php?route=account/register`;
        this.createdaccounturl = `https://tutorialsninja.com/demo/index.php?route=account/success`;
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email({ provider: 'gmail.com' });
        this.password = `pass12@345`;
        this.telephone = faker.phone.number();
        this.successMessage = `div[id='content'] h1`;
        this.medium_timeout = 20000;

    }

    async goToRegisterPage(){
        const baseMethods = new BaseMethods(this.page);
        const topHeader = new TopHeaderLocator(this.page); 
        await baseMethods.goToURL();
        await baseMethods.clickOnElement(topHeader.MyAccount);
        await baseMethods.clickOnElement(topHeader.Register);
        await this.page.waitForTimeout(3000);
        await this.validateRegisterPage();
    }

    async validateRegisterPage(){
        await expect(this.page).toHaveURL(this.pageurl);
    }

    async fillDetailsForSuccessfulRegistration(){
        const baseMethods = new BaseMethods(this.page);
        const regiserLocator = new RegisterLocator(this.page);
        await baseMethods.fillInputValue(regiserLocator.FirstNameLocator,this.firstName);
        await baseMethods.fillInputValue(regiserLocator.SecondNameLocator,this.lastName);
        await baseMethods.fillInputValue(regiserLocator.EmailLocator,this.email);
        await baseMethods.fillInputValue(regiserLocator.ContactNumber, this.telephone);
        await baseMethods.fillInputValue(regiserLocator.Password,this.password); // encrypt at a later stage
        await baseMethods.fillInputValue(regiserLocator.ConfirmPassword, this.password);
        await baseMethods.clickOnElement(regiserLocator.PrivacyPolicy);
        await baseMethods.clickOnElement(regiserLocator.CreateAccountButton);
        await baseMethods.waitforElement(this.medium_timeout);
        await baseMethods.waitForElementToBeVisible(this.successMessage);
        

    }

    async fillDetailsForErrorRegistration(){
        const baseMethods = new BaseMethods(this.page);
        const regiserLocator = new RegisterLocator(this.page);
        await baseMethods.fillInputValue(regiserLocator.FirstNameLocator,this.firstName);
        await baseMethods.fillInputValue(regiserLocator.SecondNameLocator,this.lastName);
        await baseMethods.fillInputValue(regiserLocator.EmailLocator,this.email);
        await baseMethods.fillInputValue(regiserLocator.ContactNumber, this.telephone);
        await baseMethods.fillInputValue(regiserLocator.Password,this.password); // encrypt at a later stage
        await baseMethods.fillInputValue(regiserLocator.ConfirmPassword, this.password);
        await baseMethods.clickOnElement(regiserLocator.CreateAccountButton);
        await baseMethods.waitforElement(this.medium_timeout);
        await baseMethods.validateElementVisible(regiserLocator.errorAlert);
        

    }

    async validateUserRegistrationSuccessful(){
       await expect(this.page).toHaveURL(this.createdaccounturl);
    }





}