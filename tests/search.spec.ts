import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import MenuLocator from "../locators/menubar.locator";
import dataMethods from "../pages/dataMethods.page";




test.describe(`Go to Register Page and register a new user`,()=>{

    test.beforeEach(async({page})=>{
        const baseMethods = new BaseMethods(page);
        const menulocator = new MenuLocator(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });


    test(`Print data from excel`, async({page})=>{
        const datamethods = new dataMethods(page);
        await datamethods.fetchDataFromExcel();
    });
   

});