import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "./baseMethods.page";
import MenuLocator from "../locators/menubar.locator";


export default class selectMenu{

    readonly page: Page;


    constructor(page: Page){
        this.page = page;
       
        
    }

   

}