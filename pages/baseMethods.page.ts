import { Locator, Page, expect } from "@playwright/test";


export default class BaseMethods{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goToURL(){
        await this.page.goto('/demo/');
    }

    async validateText(locator : Locator, expectedText: string){
       await expect(locator).toHaveText(expectedText);

    }

    async waitForElementToBeVisible(locator : string){
        await this.page.waitForSelector(locator,{
            state: 'visible'
        });

    }

    async validateElementVisible(locator: Locator){
        await expect(locator).toBeVisible();
    }

    async validateElementNotVisible(locator: Locator){
        await expect(locator).not.toBeVisible();
    }

    async clickOnElement(locator: Locator){
        await locator.click();
    }

    async fillInputValue(locator: Locator, InputValue: string){
        await locator.fill(InputValue);
        await this.page.waitForTimeout(1500);
    }


    async hoverOnLocator(locator: Locator){
        await locator.hover({timeout: 5000});
    }

    async waitforElement(timeout : number){
        await this.page.waitForTimeout(timeout);
    }

    
}