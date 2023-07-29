import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import DesktopProductListingPage from "../locators/desktopProductListingPage.locator";
import AddToCartLocator from "../locators/addToCart.locator";
import { base } from "@faker-js/faker";
import exp from "constants";


export default class ProductListing{

    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async goToAllDesktops(){
        const basemethods = new BaseMethods(this.page);
        const addtoCartlocators = new AddToCartLocator(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        await basemethods.hoverOnLocator(addtoCartlocators.desktop);
        await basemethods.clickOnElement(productListing.allDesktops);
    }

    async validateCategoryNameNDesc(expected : string){
        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        await basemethods.validateText(productListing.categoryName, expected);
        await basemethods.validateText(productListing.categoryName, expected);
    }


    

}