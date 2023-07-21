import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import HeaderLocators from "../locators/demo.locator";
import LandingPage from "../pages/landingpage.page";
import MenuLocator from "../locators/menubar.locator";

test.describe(`Tests for UI elements`, async()=>{

    test.beforeEach(async({page})=>{
        const baseMethods = new BaseMethods(page);
        const menulocator = new MenuLocator(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });

    test(`Validate the presence of UI elements`, async({page})=>{

        const landingpage = new LandingPage(page);
        await Promise.all([
            landingpage.navbarVisible(),
            landingpage.validateLogoVisible(),
            landingpage.searchBarVisible(),
            landingpage.cartisVisible()
        ]);
       
        

    });

    test(`Cart is empty`, async({page})=>{
        const landingpage = new LandingPage(page);
        await landingpage.validateCartIsEmpty();
    })


  
})