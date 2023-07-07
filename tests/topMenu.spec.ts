import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import MenuLocator from "../locators/menubar.locator";
import TopHeader from "../pages/topHeader.page";


test.describe(`Load the URL and validate the top header`,()=>{
    
    test.beforeEach(async({page})=>{
        const baseMethods = new BaseMethods(page);
        const menulocator = new MenuLocator(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });
    

    test(`Validate the header options are displayed`, async({page})=>{
        const topHeader = new TopHeader(page);
        await topHeader.validateOptionsPresent();
    });

    test(`Select the GBP currency`,async({page})=>{
        const topHeader = new TopHeader(page);
        await topHeader.selectGBPCurrency();
    });




});