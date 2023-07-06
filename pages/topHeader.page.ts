import { Page } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import HeaderLocators from "../locators/demo.locator";


export default class TopHeader{
    readonly page: Page;
    readonly WelcomeMessage : string;

    constructor(page: Page){
        this.page = page;
        this.WelcomeMessage = `Default welcome msg!`;
        
    }

    async validateHeaderMessage(){
        const baseMethods = new BaseMethods(this.page);
        const headerlocator = new HeaderLocators(this.page);
        await baseMethods.validateText(headerlocator.WelcomeMessasgeLocator,this.WelcomeMessage);
        
    }

    async validateSignInPresent(){
        const baseMethods = new BaseMethods(this.page);
        const headerlocator = new HeaderLocators(this.page);
        await baseMethods.validateElementVisible(headerlocator.SignInLocator);

    }

    async validateCreateAccountPresent(){
        const baseMethods = new BaseMethods(this.page);
        const headerlocator = new HeaderLocators(this.page);
        await baseMethods.validateElementVisible(headerlocator.CreateAccountLocator);

    }

    
}


