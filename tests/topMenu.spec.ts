import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import TopHeader from "../pages/topHeader.page";
import HeaderLocators from "../locators/demo.locator";

test.describe(`Load the URL and validat the top header`,()=>{
    
    
    test.beforeEach(async ({ page }) => {
        const baseMethods = new BaseMethods(page);
        const headerlocator = new HeaderLocators(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(headerlocator.WebsiteLogo);
       
    });

    test(`Validate that the top menu has items`, async({page})=>{
        const topHeaderMethods = new TopHeader(page);
        await topHeaderMethods.validateHeaderMessage();
        await topHeaderMethods.validateSignInPresent();
        await topHeaderMethods.validateCreateAccountPresent();
       
        
    });



});