import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import MenuLocator from "../locators/menubar.locator";
import dataMethods from "../pages/dataMethods.page";
import LoginPage from "../pages/login.page";




test.describe(`Go to Register Page and register a new user`,()=>{

    test.beforeEach(async({page})=>{
        const baseMethods = new BaseMethods(page);
        const menulocator = new MenuLocator(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });


    test(`Data driven testing using excel as data provider - Search functionality`, async({page})=>{
        const datamethods = new dataMethods(page);
        await datamethods.fetchDataFromExcelAndValidate();
    });

    test(`Data driven testing using json as data provider - Login functionality`, async({page})=>{
        const datamethods = new dataMethods(page);
        const loginpage = new LoginPage(page);
        await loginpage.goToLoginPage();
        await datamethods.enterUnsucessfullLogin();
    });
   

});