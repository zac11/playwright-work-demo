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
            landingpage.cartisVisible(),
            landingpage.featuredSectionDisplayed()

        ]);
       
        

    });

    test.only(`Cart is empty`, async({page})=>{
        const landingpage = new LandingPage(page);
        await landingpage.validateCartContents("0 items");
    });

    test(`Hover on the nav bar items`, async({page})=>{
        const landingpage = new LandingPage(page);
        await landingpage.hoverOnAllDropdownOptions();
    })

    test(`Validate items count in landing page`, async({page})=>{
        const landingpage = new LandingPage(page);
        await Promise.all([
            landingpage.footerPaginationCount()
        ]);
    });

    test(`Carousell swipe functionality test`, async({page})=>{
        const landingpage = new LandingPage(page);
        await landingpage.swipeNextLandingCarousell();
        await landingpage.swipeNextFooterCarousell();
    });

    test(`Footer section is displayed`, async({page})=>{
        const landingpage = new LandingPage(page);
        await page.waitForTimeout(5000);
        await Promise.all([
            landingpage.firstFooterSection(),
            landingpage.secondFooterSection(),
            landingpage.thirdFooterSection(),
            landingpage.fourthFooterSection()
        ]);
    });


  
})