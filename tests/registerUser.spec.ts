import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import HeaderLocators from "../locators/demo.locator";
import RegisterUser from "../pages/register.page";



test.describe(`Go to Register Page and register a new user`,()=>{

    test.beforeEach(async({page})=>{
        const registerUser = new RegisterUser(page);
        await registerUser.goToRegisterPage();
        await registerUser.validateRegisterPage();
    });


    test(`Try registering without agreeing to the Privacy policy`, async({page})=>{
        const registerUser = new RegisterUser(page);
        await registerUser.fillDetailsForErrorRegistration();
    });

    test(`Try registering with a successfull user`, async({page})=>{
        const registerUser = new RegisterUser(page);
        await registerUser.fillDetailsForSuccessfulRegistration();
    })
   

});