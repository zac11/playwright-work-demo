import { Locator, Page, expect } from "@playwright/test";
import AddToCartLocator from "../locators/addToCart.locator";
import BaseMethods from "./baseMethods.page";
import LandingPageLocators from "../locators/landingpage.locator";



export default class AddToCart {

    readonly page: Page;
    private readonly basemethods: BaseMethods;
    private readonly landingPageLocators: LandingPageLocators;
    private readonly addtocartlocators: AddToCartLocator;

    constructor(page: Page) {
        this.page = page;
        this.basemethods = new BaseMethods(this.page);
        this.landingPageLocators = new LandingPageLocators(this.page);
        this.addtocartlocators = new AddToCartLocator(this.page);
    }

    async validateCartContents(cartText: string): Promise<void> {
        const spanInnerText = await this.landingPageLocators.cartText.innerText();
        const finalText = await this.basemethods.returnNumberOfItems(spanInnerText);
        await expect(finalText).toEqual(cartText);

    }

    /**
     * Add a product in cart from the navbar
     */
    async addToCartFromNavbar(expectedText: string) {
        await this.basemethods.hoverOnLocator(this.addtocartlocators.desktop);
        await this.basemethods.clickOnElement(this.addtocartlocators.macDesktop);
        await this.basemethods.waitForElementToBeVisible(this.addtocartlocators.addtoCartString);
        await this.basemethods.clickOnElement(this.addtocartlocators.addtoCart);
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(expectedText);


    }


    async addToCartFromCarousell(expectedText: string) {
        await this.basemethods.clickOnElement(this.addtocartlocators.MacbookAir);
        await this.basemethods.waitForElementToBeVisible(this.addtocartlocators.addtoCartOnProductPageString);
        await this.page.waitForTimeout(500);
        await this.basemethods.clickOnElement(this.addtocartlocators.addtoCartOnProductPage);
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(`1 items`);

    }


    async addtoCartFromFeaturedSection(expectedText: string) {
        await this.landingPageLocators.productDescription.nth(1).locator(this.addtocartlocators.addtoCart).click();
        await this.page.waitForTimeout(2000);
        await this.validateCartContents(expectedText);

    }


    async removeSingleItemFromCart() {
        await this.basemethods.clickOnElement(this.landingPageLocators.cartText);
        await this.basemethods.clickOnElement(this.addtocartlocators.removeCartTable.locator(`tr`).locator(this.addtocartlocators.removeCartItem));
        await this.page.waitForTimeout(1000);
        await this.validateCartContents(`0 items`);

    }

    async removeMultipleItemsFromCart() {
        await this.basemethods.clickOnElement(this.landingPageLocators.cartText);
        for (const li of await this.addtocartlocators.removeCartTable.locator(`tr`).all()) {
            await this.page.waitForTimeout(1000);
            await this.basemethods.clickOnElement(li.getByTitle(`Remove`));
            await this.basemethods.clickOnElement(this.landingPageLocators.cartText);

        }

    }


}