import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import LandingPageLocators from "../locators/landingpage.locator";


export default class LandingPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateLogoVisible(): Promise<void> {
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.logoWebsite);

    }

    async navbarVisible(): Promise<void> {
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.navbar);
    }

    async searchBarVisible(): Promise<void> {
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.searchBar);
    }

    async cartisVisible(): Promise<void> {
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        await baseMethods.validateElementVisible(landingPageLocators.cart);
    }

    async validateCartIsEmpty(): Promise<void> {
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        const spanInnerText = await landingPageLocators.cartText.innerText();
        const finalText = await baseMethods.returnNumberOfItems(spanInnerText);
        console.log(await finalText);
        await baseMethods.validateText(landingPageLocators.cartText, finalText)  // make it more robust in future by using regex
        //await baseMethods.validateContainsText(landingPageLocators.cartText, finalText);
       
    }

    async validateCartContents(cartText : string) : Promise<void>{
        const baseMethods = new BaseMethods(this.page);
        const landingPageLocators = new LandingPageLocators(this.page);
        const spanInnerText = await landingPageLocators.cartText.innerText();
        const finalText = await baseMethods.returnNumberOfItems(spanInnerText);
        await expect(finalText).toEqual(cartText);
       
    }

    async validateNavBarChilds(): Promise<void> {
        const expectedHeaderValues = ["Desktops", "Laptops & Notebooks", "Components", "Tablets", "Software", "Phones & PDAs", "Cameras", "MP3 Players"];
        const landingPageLocators = new LandingPageLocators(this.page);
        for (const li of await landingPageLocators.navbarlist.locator('li').all())
            console.log(await li.allInnerTexts());


    }

    async featuredSectionDisplayed() {
        const landingPageLocators = new LandingPageLocators(this.page);
        for (const div of await landingPageLocators.productDescription.all())
            await div.isVisible()
    }

    async footerPaginationCount(): Promise<void> {
        const landingPageLocators = new LandingPageLocators(this.page);
        const count = await landingPageLocators.footerPagination.count();
        expect(count).toBeGreaterThanOrEqual(10);

    }

    async swipeNextLandingCarousell() {
        const landingPageLocators = new LandingPageLocators(this.page);
        await landingPageLocators.swipeNextButton.nth(0).click({ delay: 500 });
    }

    async swipeNextFooterCarousell() {
        const landingPageLocators = new LandingPageLocators(this.page);
        for (const div of await landingPageLocators.footerPagination.all())
            await landingPageLocators.swipeNextButton.nth(1).click({ delay: 500 });
    }


    async firstFooterSection(): Promise<void> {
        const expectedArray = [
            'About Us',
            'Delivery Information',
            'Privacy Policy',
            'Terms & Conditions'
        ];
        const landingPageLocators = new LandingPageLocators(this.page);
        const footerOptions = await landingPageLocators.footerSectionClass.nth(1).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedArray)

    }

    async secondFooterSection(): Promise<void> {
        const expectedOptions = ['Contact Us', 'Returns', 'Site Map']
        const landingPageLocators = new LandingPageLocators(this.page);
        const footerOptions = await landingPageLocators.footerSectionClass.nth(2).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedOptions)

    }

    async thirdFooterSection(): Promise<void> {
        const expectedOptions = [
            'Brands',
            'Gift Certificates',
            'Affiliate',
            'Specials'
        ]
        const landingPageLocators = new LandingPageLocators(this.page);
        const footerOptions = await landingPageLocators.footerSectionClass.nth(3).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedOptions)

    }

    async fourthFooterSection() : Promise<void> {
        const expectedOptions = [
            'My Account',
            'Order History',
            'Wish List',
            'Newsletter'
        ]
        const landingPageLocators = new LandingPageLocators(this.page);
        const footerOptions = await landingPageLocators.footerSectionClass.nth(4).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedOptions)

    }

    async hoverOnAllDropdownOptions(){
        const landingpagelocators = new LandingPageLocators(this.page);
        for( const li of await landingpagelocators.navbar.locator(`.dropdown`).all() ){
            await li.hover();
            await this.page.waitForTimeout(1000); // delay so that the action is visible
        }
           
           

    }


    







}