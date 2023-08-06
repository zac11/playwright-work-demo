import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import HeaderLocators from "../locators/demo.locator";
import LandingPage from "../pages/landingpage.page";
import AddToCart from "../pages/addToCart.page"
import MenuLocator from "../locators/menubar.locator";

let basemethods;
let menulocator;
let landingpage;
let addtoCart;

test.describe(`Tests for UI elements`, async () => {

    test.beforeEach(async ({ page }) => {
         basemethods = new BaseMethods(page);
         menulocator = new MenuLocator(page);
         landingpage = new LandingPage(page);
         addtoCart = new AddToCart(page);
        await basemethods.goToURL();
        await basemethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });

    test(`Validate the presence of UI elements`, async ({ page }) => {
        await Promise.all([
            landingpage.navbarVisible(),
            landingpage.validateLogoVisible(),
            landingpage.searchBarVisible(),
            landingpage.cartisVisible(),
            landingpage.featuredSectionDisplayed()

        ]);



    });

    test(`Cart is empty`, async ({ page }) => {
        await addtoCart.validateCartContents("0 items");
    });

    test(`Hover on the nav bar items`, async ({ page }) => {
        await landingpage.hoverOnAllDropdownOptions();
    })

    test(`Validate items count in landing page`, async ({ page }) => {
        await Promise.all([
            landingpage.footerPaginationCount()
        ]);
    });

    test(`Carousell swipe functionality test`, async ({ page }) => {
      
        await landingpage.swipeNextLandingCarousell();
        await landingpage.swipeNextFooterCarousell();
    });

    test(`Footer section is displayed`, async ({ page }) => {
       
        await page.waitForTimeout(5000);
        await Promise.all([
            landingpage.firstFooterSection(),
            landingpage.secondFooterSection(),
            landingpage.thirdFooterSection(),
            landingpage.fourthFooterSection()
        ]);
    });



})