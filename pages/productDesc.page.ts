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
        await this.basemethods.waitforElement(3000);
        await expect(this.productdesc.majorthumbnail).toBeVisible();
        const count = await this.productdesc.minorthumbnail.count();
        await expect(count).toBeGreaterThan(0);
        
    }

    async productDescriptionNotEmpty(){
        await this.basemethods.validateElementVisible(this.productdesc.descriptionTab);
        await expect(this.productdesc.descriptionTab).not.toBeEmpty();
    }

    async productSpecificationNotEmpty(){
        if(await this.productdesc.SpecificationTab.isVisible()){
            await this.productdesc.SpecificationTab.click();
           await expect(this.productdesc.SpecificationTab).not.toBeEmpty();
        }else{
            console.log(`Specification tab doesn't exist for this product`);
        }
    }


    async productReivewTab(){
        await this.basemethods.validateElementVisible(this.productdesc.ReviewsTab);
        await this.productdesc.ReviewsTab.click();
        await expect(this.productdesc.ReviewsTab).not.toBeEmpty();
        await expect(this.productdesc.productReviewForm).toBeVisible();
    }

    async productPageWishListIcon() : Promise<void>{
        await this.basemethods.hoverOnLocator(this.productdesc.AddtoWishList);
        await this.basemethods.waitforElement(3000);  
        await expect(this.productdesc.AddtoWishList).toBeVisible(); 
        const tiptext = await this.productdesc.AddtoWishList.getAttribute(`data-original-title`);
        await expect(tiptext).toEqual(`Add to Wish List`);

    }

    async productPageCompareProduct() : Promise<void>{
        
        await this.basemethods.hoverOnLocator(this.productdesc.CompareProduct);
        await this.basemethods.waitforElement(3000); 
        await expect(this.productdesc.CompareProduct).toBeVisible(); 
        const tiptext = await this.productdesc.CompareProduct.getAttribute(`data-original-title`);
        await expect(tiptext).toEqual(`Compare this Product`);
    }

    async productInformation() : Promise<void>{
        await this.basemethods.waitForLocator(this.productdesc.ProductName);
        await expect(this.productdesc.ProductName).not.toBeUndefined();
    }

    async productPrice() : Promise<void>{
        await this.basemethods.waitForLocator(this.productdesc.ProductPrice);
        await expect(this.productdesc.ProductPrice).toBeGreaterThan(0);
    }

    async productAddtoCartBtn(){
        await this.basemethods.waitForLocator(this.productdesc.AddToCart);
        await expect(this.productdesc.AddToCart).toBeVisible();
    }


    async addProductToCartAndValidateCart(){
        await this.basemethods.waitForLocator(this.productdesc.AddToCart);
        await this.productdesc.productQuantity.fill(`4`);
        await this.basemethods.clickOnElement(this.productdesc.AddToCart);
    }

    async gotoProductPageFromNavbar(){

    }

    async gotoProductPageFromSearch(){

    }
}