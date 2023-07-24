import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import LandingPageLocators from "../locators/landingpage.locator";


export default class LandingPage{

    readonly page: Page;

    constructor(page : Page){
        this.page = page;
    }

    async validateLogoVisible() : Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.logoWebsite);
        
    }

    async navbarVisible() : Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.navbar);
    }

    async searchBarVisible() :Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.searchBar);
    }

    async cartisVisible() : Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.cart);
    }

    async validateCartIsEmpty() : Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        const spanInnerText = await landingPageLocators.cartText.innerText();
        if(spanInnerText.includes("0 item(s)")){
            console.log('Validation successful! The span contains the expected text.');
        }
        else{
            console.log('Validation unsuccessful! The span does not contains the expected text.');
        }
    }

    async validateNavBarChilds() : Promise<void>{
        const expectedHeaderValues = ["Desktops","Laptops & Notebooks","Components","Tablets","Software","Phones & PDAs","Cameras","MP3 Players"];
        const landingPageLocators = new LandingPageLocators(this.page);
        for (const li of await landingPageLocators.navbarlist.locator('li').all())
        console.log(await li.allInnerTexts());

        
    }

    async featuredSectionDisplayed(){
        const landingPageLocators = new LandingPageLocators(this.page);
        for(const div of await landingPageLocators.productDescription.all())
            await div.isVisible()
    }

    async footerPaginationCount() : Promise<void> {
        const landingPageLocators = new LandingPageLocators(this.page);
        const count  = await landingPageLocators.footerPagination.count();
        expect(count).toBeGreaterThanOrEqual(10);

    }

    async swipeNextLandingCarousell(){
        const landingPageLocators = new LandingPageLocators(this.page);
        await landingPageLocators.swipeNextButton.nth(0).click();
    }

    async swipeNextFooterCarousell(){
        const landingPageLocators = new LandingPageLocators(this.page);
        for (const div of await landingPageLocators.footerPagination.all())
            await landingPageLocators.swipeNextButton.nth(1).click();
    }







}