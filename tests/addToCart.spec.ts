import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import AddToCart from "../pages/addToCart.page";
import MenuLocator from "../locators/menubar.locator";


test.describe(`Add a product to cart`,async()=>{

    test.beforeEach(async ({ page }) => {
        const baseMethods = new BaseMethods(page);
        const menulocator = new MenuLocator(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });


    test(`Add a product in cart from the navbar`, async({page})=>{
        const addToCart = new AddToCart(page);
        await addToCart.addToCartFromNavbar();
    })
})