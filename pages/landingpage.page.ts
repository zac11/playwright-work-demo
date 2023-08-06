import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import LandingPageLocators from "../locators/landingpage.locator";
import LoginLocators from "../locators/login.locator";


export default class LandingPage {

    readonly page: Page;
    private readonly basemethods : BaseMethods;
    private readonly landingPageLocators : LandingPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.basemethods = new BaseMethods(this.page);
        this.landingPageLocators = new LandingPageLocators(this.page);
    }

    async validateLogoVisible(): Promise<void> {
        await this.basemethods.validateElementVisible(this.landingPageLocators.logoWebsite);

    }

    async navbarVisible(): Promise<void> {
        await this.basemethods.validateElementVisible(this.landingPageLocators.navbar);
    }

    async searchBarVisible(): Promise<void> {
        await this.basemethods.validateElementVisible(this.landingPageLocators.searchBar);
    }

    async cartisVisible(): Promise<void> {
        await this.basemethods.validateElementVisible(this.landingPageLocators.cart);
    }

    async validateCartIsEmpty(): Promise<void> {
        const spanInnerText = await this.landingPageLocators.cartText.innerText();
        const finalText = await this.basemethods.returnNumberOfItems(spanInnerText);
        console.log(await finalText);
        await this.basemethods.validateText(this.landingPageLocators.cartText, finalText)  // make it more robust in future by using regex
        //await baseMethods.validateContainsText(landingPageLocators.cartText, finalText);
       
    }

    async validateCartContents(cartText : string) : Promise<void>{
        const spanInnerText = await this.landingPageLocators.cartText.innerText();
        const finalText = await this.basemethods.returnNumberOfItems(spanInnerText);
        await expect(finalText).toEqual(cartText);
       
    }

    async validateNavBarChilds(): Promise<void> {
        const expectedHeaderValues = ["Desktops", "Laptops & Notebooks", "Components", "Tablets", "Software", "Phones & PDAs", "Cameras", "MP3 Players"];
        for (const li of await this.landingPageLocators.navbarlist.locator('li').all())
            console.log(await li.allInnerTexts());


    }

    async featuredSectionDisplayed() {
        for (const div of await this.landingPageLocators.productDescription.all())
            await div.isVisible()
    }

    async footerPaginationCount(): Promise<void> {
        const count = await this.landingPageLocators.footerPagination.count();
        expect(count).toBeGreaterThanOrEqual(10);

    }

    async swipeNextLandingCarousell() {
        await this.landingPageLocators.swipeNextButton.nth(0).click({ delay: 500 });
    }

    async swipeNextFooterCarousell() {
        for (const div of await this.landingPageLocators.footerPagination.all())
            await this.landingPageLocators.swipeNextButton.nth(1).click({ delay: 500 });
    }


    async firstFooterSection(): Promise<void> {
        const expectedArray = [
            'About Us',
            'Delivery Information',
            'Privacy Policy',
            'Terms & Conditions'
        ];
        const footerOptions = await this.landingPageLocators.footerSectionClass.nth(1).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedArray)

    }

    async secondFooterSection(): Promise<void> {
        const expectedOptions = ['Contact Us', 'Returns', 'Site Map'];
        const footerOptions = await this.landingPageLocators.footerSectionClass.nth(2).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedOptions)

    }

    async thirdFooterSection(): Promise<void> {
        const expectedOptions = [
            'Brands',
            'Gift Certificates',
            'Affiliate',
            'Specials'
        ]
        const footerOptions = await this.landingPageLocators.footerSectionClass.nth(3).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedOptions)

    }

    async fourthFooterSection() : Promise<void> {
        const expectedOptions = [
            'My Account',
            'Order History',
            'Wish List',
            'Newsletter'
        ]
        const footerOptions = await this.landingPageLocators.footerSectionClass.nth(4).locator(`li`).allInnerTexts();
        await expect(footerOptions).toEqual(expectedOptions)

    }

    async hoverOnAllDropdownOptions(){
        for( const li of await this.landingPageLocators.navbar.locator(`.dropdown`).all() ){
            await li.hover();
            await this.page.waitForTimeout(1000); // delay so that the action is visible
        }
           
           

    }


    







}