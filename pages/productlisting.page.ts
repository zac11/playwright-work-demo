import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import DesktopProductListingPage from "../locators/desktopProductListingPage.locator";
import AddToCartLocator from "../locators/addToCart.locator";
import { base } from "@faker-js/faker";
import exp from "constants";


export default class ProductListing {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToAllDesktops() {
        const basemethods = new BaseMethods(this.page);
        const addtoCartlocators = new AddToCartLocator(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        await basemethods.hoverOnLocator(addtoCartlocators.desktop);
        await basemethods.clickOnElement(productListing.allDesktops);
    }

    async validateCategoryNameNDesc(expectedCategory: string, expectedDescription: string) {

        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        await this.page.waitForTimeout(3000);
        await basemethods.validateText(productListing.categoryName, expectedCategory);
        await basemethods.validateText(productListing.categoryDesc, expectedDescription);
    }

    async validateRefineSearchOptionsCount(expectedCount: number) {
        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        const listofrefinesearchoptions = await productListing.refineSearchOptions.nth(2).locator(`li`).count();
        (expect(await listofrefinesearchoptions).toEqual(expectedCount));

    }

    async changeViewOption(option: string) {
        const basemethods = new BaseMethods(this.page);
        const productListing = new DesktopProductListingPage(this.page);
        if (option == `LIST`) {
            await basemethods.clickOnElement(productListing.listView);
            await basemethods.validateCountOfElementsIsNotZero(productListing.listViewClass);
        } else {
            await basemethods.clickOnElement(productListing.GridView);
            await basemethods.validateCountOfElementsIsNotZero(productListing.GridViewClass);
        }
        await this.page.waitForTimeout(3000);
    }


    async validateAllSortingOptions() {
        const expectedArray = [
            'Default',
            'Name (A - Z)',
            'Name (Z - A)',
            'Price (Low > High)',
            'Price (High > Low)',
            'Rating (Highest)',
            'Rating (Lowest)',
            'Model (A - Z)',
            'Model (Z - A)'

        ];
        const productListing = new DesktopProductListingPage(this.page);
        const allSelectOptions = await productListing.sortingOptions.locator(`option`).allInnerTexts();
        await expect(allSelectOptions).toEqual(expectedArray);


    }

    async selectShowLimit(limit : number){
        // valid values are 20,25,50,75,100
        const productListing = new DesktopProductListingPage(this.page);
        await productListing.showLimit.selectOption({label: `${limit}`});
        await this.page.waitForLoadState(`networkidle`);

    }

    async sortProductsByName(sortOrder : string){
        // sort products based by name - asc or descending order

        const productListing = new DesktopProductListingPage(this.page);
        if(sortOrder == `desc` || sortOrder == `DESC`){
            await productListing.sortingOptions.selectOption({index : 2});
            await this.page.waitForLoadState(`networkidle`);

        }else{
            await productListing.sortingOptions.selectOption({index : 1});
            await this.page.waitForLoadState(`networkidle`);
        }

    }

    async sortProductsByPrice(sortOrder : string){
        // sort products based by price - asc or descending order

        const productListing = new DesktopProductListingPage(this.page);
        if(sortOrder == `desc` || sortOrder == `DESC`){
            await productListing.sortingOptions.selectOption({index : 4});
            await this.page.waitForLoadState(`networkidle`);

        }else{
            await productListing.sortingOptions.selectOption({index : 3});
            await this.page.waitForLoadState(`networkidle`);
        }

    }

    async sortProductsByRating(sortOrder : string){
        // sort products based by rating - asc or descending order

        const productListing = new DesktopProductListingPage(this.page);
        if(sortOrder == `desc`  || sortOrder == `DESC`){
            await productListing.sortingOptions.selectOption({index : 6});
            await this.page.waitForLoadState(`networkidle`);

        }else{
            await productListing.sortingOptions.selectOption({index : 5});
            await this.page.waitForLoadState(`networkidle`);
        }

    }

    async sortProductsByModel(sortOrder : string){
        // sort products based by model - asc or descending order

        const productListing = new DesktopProductListingPage(this.page);
        if(sortOrder == `desc`  || sortOrder == `DESC`){
            await productListing.sortingOptions.selectOption({index : 8});
            await this.page.waitForLoadState(`networkidle`);

        }else{
            await productListing.sortingOptions.selectOption({index : 7});
            await this.page.waitForLoadState(`networkidle`);
        }

    }

    async visitaProduct(index: number){

    }




}