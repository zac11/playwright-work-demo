import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import AddToCart from "../pages/addToCart.page";
import MenuLocator from "../locators/menubar.locator";

let baseMethods;
let menulocator;
let addToCart;


test.describe(`Add a product to cart`,async()=>{

    test.beforeEach(async ({ page }) => {
         baseMethods = new BaseMethods(page);
         menulocator = new MenuLocator(page);
         addToCart = new AddToCart(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
    });


    test(`Add a product in cart from the navbar`, async({page})=>{   
        await addToCart.addToCartFromNavbar(`1 items`);
    });

    test(`Add a product in cart from the carousell`, async({page})=>{  
        await addToCart.addToCartFromCarousell(`1 items`);
    });

    test(`Add a product in cart from the featured section`, async({page})=>{
        await addToCart.addtoCartFromFeaturedSection(`1 items`);
    });

    test(`Add a produt to cart and then remove it`, async({page})=>{   
        await addToCart.addtoCartFromFeaturedSection(`1 items`);
        await addToCart.removeSingleItemFromCart();
    });

    test.skip(`Add multiple products to cart and then remove it`, async({page})=>{
        await addToCart.addtoCartFromFeaturedSection(`1 items`);
        await addToCart.addToCartFromNavbar(`2 items`);
        await addToCart.removeMultipleItemsFromCart();
    });
})