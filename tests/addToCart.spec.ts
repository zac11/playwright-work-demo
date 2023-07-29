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
        await addToCart.addToCartFromNavbar(`1 items`);
    });

    test(`Add a product in cart from the carousell`, async({page})=>{
        const addToCart = new AddToCart(page);
        await addToCart.addToCartFromCarousell(`1 items`);
    });

    test(`Add a product in cart from the featured section`, async({page})=>{
        const addToCart = new AddToCart(page);
        await addToCart.addtoCartFromFeaturedSection(`1 items`);
    });

    test(`Add a produt to cart and then remove it`, async({page})=>{
        const addToCart = new AddToCart(page);
        await addToCart.addtoCartFromFeaturedSection(`1 items`);
        await addToCart.removeSingleItemFromCart();
    });

    test.skip(`Add multiple products to cart and then remove it`, async({page})=>{
        const addToCart = new AddToCart(page);
        await addToCart.addtoCartFromFeaturedSection(`1 items`);
        await addToCart.addToCartFromNavbar(`2 items`);
        await addToCart.removeMultipleItemsFromCart();
    });
})