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

    async validateCategoryNameNDesc(expectedCategory : string, expectedDescription : string){
        
        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        await this.page.waitForTimeout(3000);
        await basemethods.validateText(productListing.categoryName, expectedCategory);
        await basemethods.validateText(productListing.categoryDesc, expectedDescription);
    }

    async validateRefineSearchOptionsCount(expectedCount : number){
        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        const listofrefinesearchoptions = await productListing.refineSearchOptions.nth(2).locator(`li`).count();
        (expect(await listofrefinesearchoptions).toEqual(expectedCount));

    }

    async changeViewOption(option: string){
        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        if(option == `LIST`){
            await basemethods.clickOnElement(productListing.listView);
            await basemethods.validateCountOfElementsIsNotZero(productListing.listViewClass);
        }else{
            await basemethods.clickOnElement(productListing.GridView);
        }
    }


    

}