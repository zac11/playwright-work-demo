import { test, Page } from "@playwright/test";
import ProductListing from "../pages/productlisting.page";
import BaseMethods from "../pages/baseMethods.page";
import MenuLocator from "../locators/menubar.locator";


test.describe(`Tests for Desktop product listings`, async()=>{

    test.beforeEach(async ({ page }) => {
        const baseMethods = new BaseMethods(page);
        const menulocator = new MenuLocator(page);
        const productlisting = new ProductListing(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
        await productlisting.goToAllDesktops();
    });

    test(`Go to all desktop listing and validate h2 text and desc`, async({page})=>{
        const productlisting = new ProductListing(page);    
        await productlisting.validateCategoryNameNDesc(`Desktops`,`Example of category description text`);
    });

    test(`Go to all desktop listing and count refine options`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.validateRefineSearchOptionsCount(2);

    });

    test(`Go to all desktop listing and change view to LIST`,async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.changeViewOption(`LIST`);
    });

    test(`Go to all desktop listing and change view to GRID`,async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.changeViewOption(`GRID`);
    });

    test(`Validate all select options in sort by`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.validateAllSortingOptions()
    });

    test(`Change limit of products`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.selectShowLimit(50);
    });

    test(`Sort products by name in descending order`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.sortProductsByName(`desc`);
    });

    test(`Sort products by price in descending order`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.sortProductsByPrice(`desc`);
    });

    test(`Sort products by rating in descending order`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.sortProductsByRating(`DESC`);
    });

    test(`Sort products by model in descending order`, async({page})=>{
        const productlisting = new ProductListing(page);
        await productlisting.sortProductsByModel(`desc`);
    });
    
   

})