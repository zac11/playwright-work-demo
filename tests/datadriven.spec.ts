import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import MenuLocator from "../locators/menubar.locator";
import dataMethods from "../pages/dataMethods.page";
import LoginPage from "../pages/login.page";


let baseMethods;
let menulocator;
let datamethods;
let loginpage;

test.describe(`Go to Register Page and register a new user`,()=>{

    test.beforeEach(async({page})=>{
         baseMethods = new BaseMethods(page);
         menulocator = new MenuLocator(page);
         datamethods = new dataMethods(page);
         loginpage = new LoginPage(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });


    test(`Data driven testing using excel as data provider - Search functionality`, async({page})=>{
       
        await datamethods.fetchDataFromExcelAndValidate();
    });

    test(`Data driven testing using json as data provider - Login functionality`, async({page})=>{
        await loginpage.goToLoginPage();
        await datamethods.enterUnsucessfullLoginUsingJson();
    });

    test(`Data driven testing using yaml as data provider - Login functionality`, async({page})=>{
        await loginpage.goToLoginPage();
        await datamethods.enterUnsuccessfullLoginUsingYaml()
    })
   

});