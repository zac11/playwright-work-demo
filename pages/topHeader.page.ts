import { Locator, Page } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import TopHeaderLocator from "../locators/topBar.locator";



export default class TopHeader{
    readonly page: Page;
    readonly validateTextCurrency : string;
   

    constructor(page: Page){
        this.page = page;
        this.validateTextCurrency = `£`;
        
    }

    async validateOptionsPresent(){
        const baseMethods = new BaseMethods(this.page);
        const topheader = new TopHeaderLocator(this.page);
        await baseMethods.validateElementVisible(topheader.CurrencyDropDown);
        await baseMethods.validateElementVisible(topheader.ContactNumber);
        await baseMethods.validateElementVisible(topheader.MyAccount);
        await baseMethods.validateElementVisible(topheader.ShoppingCart);
        await baseMethods.validateElementVisible(topheader.WishList);
        await baseMethods.validateElementVisible(topheader.Checkout);

        
       
        
    }

    async selectGBPCurrency(){
        const baseMethods = new BaseMethods(this.page);
        const topheader = new TopHeaderLocator(this.page);
        await baseMethods.clickOnElement(topheader.CurrencyDropDown);
        await baseMethods.waitforElement(3000);
        await baseMethods.clickOnElement(topheader.GBPOption);
        await baseMethods.validateText(topheader.GBPSelected, this.validateTextCurrency);
       
    }

   

    


}


