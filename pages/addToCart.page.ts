import { Locator, Page, expect } from "@playwright/test";
import AddToCartLocator from "../locators/addToCart.locator";
import BaseMethods from "./baseMethods.page";


export default class AddToCart{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

/**
 * Add a product in cart from the navbar
 */
    async addToCartFromNavbar(){
        const basemethods = new BaseMethods(this.page);
        const addtocartlocators = new AddToCartLocator(this.page);

        await basemethods.hoverOnLocator(addtocartlocators.desktop);

    }
}