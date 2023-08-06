import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import ProductDescLocators from "../locators/productDesc.locator";

export default class ProductDesc{
    readonly page : Page;
    private readonly basemethods: BaseMethods;
    private readonly productdesc: ProductDescLocators;


    constructor(page : Page){
        this.page = page;
        this.basemethods = new BaseMethods(this.page);
        this.productdesc = new ProductDescLocators(this.page);
       

    }

    async gotoProductPageFromLandingPage(){
    
        await this.basemethods.clickOnElement(this.productdesc.productPage);
        await this.basemethods.waitForElementToBeVisible(this.productdesc.AddToCartString);
    }

    async validateThumbNails(){
        const basemethods = new BaseMethods(this.page);
        const productdesc = new ProductDescLocators(this.page);
        await basemethods.waitforElement(3000);
        await expect(productdesc.majorthumbnail).toBeVisible();
        const count = await productdesc.minorthumbnail.count();
        await expect(count).toBeGreaterThan(0);
        
    }

    async productDescriptionNotEmpty(){
        const basemethods = new BaseMethods(this.page);
        const productdesc = new ProductDescLocators(this.page);
        await basemethods.validateElementVisible(productdesc.descriptionTab);
        await expect(productdesc.descriptionTab).not.toBeEmpty();
    }

    async productSpecificationNotEmpty(){
        const basemethods = new BaseMethods(this.page);
        const productdesc = new ProductDescLocators(this.page);
        if(await productdesc.SpecificationTab.isVisible()){
            await productdesc.SpecificationTab.click();
           await expect(productdesc.SpecificationTab).not.toBeEmpty();
        }else{
            console.log(`Specification tab doesn't exist for this product`);
        }
    }


    async productReivewTab(){
        const basemethods = new BaseMethods(this.page);
        const productdesc = new ProductDescLocators(this.page);
        await basemethods.validateElementVisible(productdesc.ReviewsTab);
        await productdesc.ReviewsTab.click();
        await expect(productdesc.ReviewsTab).not.toBeEmpty();
        await expect(productdesc.productReviewForm).toBeVisible();
    }

    async productPageWishListIcon() : Promise<void>{
        const basemethods = new BaseMethods(this.page);
        const productdesc = new ProductDescLocators(this.page);
        await basemethods.hoverOnLocator(productdesc.AddtoWishList);
        await basemethods.waitforElement(3000);  
        await expect(productdesc.AddtoWishList).toBeVisible(); 
        const tiptext = await productdesc.AddtoWishList.getAttribute(`data-original-title`);
        await expect(tiptext).toEqual(`Add to Wish List`);

    }

    async productPageCompareProduct() : Promise<void>{
        const basemethods = new BaseMethods(this.page);
        const productdesc = new ProductDescLocators(this.page);
        await basemethods.hoverOnLocator(productdesc.CompareProduct);
        await basemethods.waitforElement(3000); 
        await expect(productdesc.CompareProduct).toBeVisible(); 
        const tiptext = await productdesc.CompareProduct.getAttribute(`data-original-title`);
        await expect(tiptext).toEqual(`Compare this Product`);
    }

    async gotoProductPageFromNavbar(){

    }

    async gotoProductPageFromSearch(){

    }
}