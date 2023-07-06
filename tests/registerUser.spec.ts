import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import HeaderLocators from "../locators/demo.locator";
import RegisterUser from "../pages/register.page";



test.describe(`Go to Register Page and register a new user`,()=>{

    test.beforeEach(async({page})=>{
        const baseMethods = new BaseMethods(page);
        const headerlocator = new HeaderLocators(page);
        const registerUser = new RegisterUser(page);
        await baseMethods.goToURL();
        await baseMethods.clickOnElement(headerlocator.CreateAccountLocator);
        await registerUser.validateRegisterPage();

    });

    test(`Register a user with strong password`, async({page})=>{
        const registerUser = new RegisterUser(page);
        await registerUser.fillRegisterFields();

    });

})