import { Locator, Page, expect } from "@playwright/test";
import AddToCartLocator from "../locators/addToCart.locator";
import BaseMethods from "./baseMethods.page";
import LandingPageLocators from "../locators/landingpage.locator";


export default class AddToCart{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async validateCartContents(cartText : string) : Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        const spanInnerText = await landingPageLocators.cartText.innerText();
        const finalText = await baseMethods.returnNumberOfItems(spanInnerText);
        await expect(finalText).toEqual(cartText);
       
    }

/**
 * Add a product in cart from the navbar
 */
    async addToCartFromNavbar(){
        const basemethods = new BaseMethods(this.page);
        const addtocartlocators = new AddToCartLocator(this.page);
        await basemethods.hoverOnLocator(addtocartlocators.desktop);
        await basemethods.clickOnElement(addtocartlocators.macDesktop);
        await basemethods.waitForElementToBeVisible(`button[type='button'] span[class='hidden-xs hidden-sm hidden-md']`);
        await basemethods.clickOnElement(addtocartlocators.addtoCart);
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(`1 items`);


    }
}