import { Locator, Page, expect } from "@playwright/test";
import AddToCartLocator from "../locators/addToCart.locator";
import BaseMethods from "./baseMethods.page";
import LandingPageLocators from "../locators/landingpage.locator";
import { base } from "@faker-js/faker";


export default class AddToCart {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateCartContents(cartText: string): Promise<void> {
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        const spanInnerText = await landingPageLocators.cartText.innerText();
        const finalText = await baseMethods.returnNumberOfItems(spanInnerText);
        await expect(finalText).toEqual(cartText);

    }

    /**
     * Add a product in cart from the navbar
     */
    async addToCartFromNavbar() {
        const basemethods = new BaseMethods(this.page);
        const addtocartlocators = new AddToCartLocator(this.page);
        await basemethods.hoverOnLocator(addtocartlocators.desktop);
        await basemethods.clickOnElement(addtocartlocators.macDesktop);
        await basemethods.waitForElementToBeVisible(addtocartlocators.addtoCartString);
        await basemethods.clickOnElement(addtocartlocators.addtoCart);
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(`1 items`);


    }


    async addToCartFromCarousell() {
        const basemethods = new BaseMethods(this.page);
        const addtocartlocators = new AddToCartLocator(this.page);
        await basemethods.clickOnElement(addtocartlocators.MacbookAir);
        await basemethods.waitForElementToBeVisible(addtocartlocators.addtoCartOnProductPageString);
        await this.page.waitForTimeout(500);
        await basemethods.clickOnElement(addtocartlocators.addtoCartOnProductPage);
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(`1 items`);

    }


    async addtoCartFromFeaturedSection() {

        const addtocartlocators = new AddToCartLocator(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);

        await landingPageLocators.productDescription.nth(1).locator(addtocartlocators.addtoCart).click();
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(`1 items`);

    }


    async removeSingleItemFromCart(){
        const basemethods = new BaseMethods(this.page);
        const addtocartlocators = new AddToCartLocator(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await basemethods.clickOnElement(landingPageLocators.cartText);
        await basemethods.clickOnElement(addtocartlocators.removeCartTable.locator(`tr`).locator(addtocartlocators.removeCartItem));
        await this.page.waitForTimeout(1000);
        await this.validateCartContents(`0 items`);

    }


}