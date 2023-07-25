import { test, Locator, Page } from "@playwright/test";


export default class MenuLocator{

    readonly WebsiteLogo : string;
    

    constructor(page: Page){
       this.WebsiteLogo = `#logo`;

    }

}