import { Locator, Page, expect } from "@playwright/test";
import * as CryptoJS from 'crypto-js';


export default class BaseMethods {

    readonly page: Page;
    readonly LoginPassword: string;

    constructor(page: Page) {
        this.page = page;
        this.LoginPassword = `pass123@45`;
    }

    async goToURL() {
        await this.page.goto('/demo/');
    }

    async validateText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);

    }



    async validateContainsText(locator: Locator, expectedText : string){
        await expect(locator).toContainText(expectedText);
    }

    async waitForElementToBeVisible(locator: string) {
        await this.page.waitForSelector(locator, {
            state: 'visible'
        });

    }

    async validateElementVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async validateCountOfElements(locator: Locator, expectedCount : number){
        await expect(locator).toHaveCount(expectedCount);
    }

    async validateCountOfElementsIsNotZero(locator: Locator){
        const count = await locator.count();
        await expect(count).toBeGreaterThanOrEqual(1);
    }

    async validateElementNotVisible(locator: Locator) {
        await expect(locator).not.toBeVisible();
    }

    async clickOnElement(locator: Locator) {
        await locator.click();
    }

    async fillInputValue(locator: Locator, InputValue: string) {
        await locator.fill(InputValue);
        await this.page.waitForTimeout(1500);
    }


    async hoverOnLocator(locator: Locator) {
        await locator.hover({ timeout: 5000 });
    }

    async waitforElement(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async encrypt_password() {
        const key = `SECRET`;
        await console.log(`The password is ${this.LoginPassword}`);
        const cipher = CryptoJS.AES.encrypt('************', key);
        await console.log(cipher.toString());
        return CryptoJS.AES.decrypt(this.LoginPassword, key).toString(CryptoJS.enc.Utf8);

    }


    async decrypt_password() {
        const key = `SECRET`;
        const cipher = CryptoJS.AES.encrypt(this.LoginPassword, key);
        console.log(cipher.toString());
        return CryptoJS.AES.decrypt(this.LoginPassword, key).toString(CryptoJS.enc.Utf8);
    }

    async returnNumberOfItems(inputText) {
        const regex = /\b(\d+)\sitem/;
        const match = inputText.match(regex);
        if (match) {
            const count = match[1];
            return `${count} items`;
        } else {
            return 'No items found';
        }
    }


}