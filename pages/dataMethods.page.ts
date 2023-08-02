import { Locator, Page, expect } from "@playwright/test";
import LandingPageLocators from "../locators/landingpage.locator";
import { persons } from '../data/searchQueryJson.json';
import * as path from 'path';
import Excel from 'exceljs';
import BaseMethods from "./baseMethods.page";
import LoginLocators from "../locators/login.locator";


export default class dataMethods {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    readonly getCellValue = (row: Excel.Row, cellIndex: number) => {
        const cell = row.getCell(cellIndex);

        return cell.value ? cell.value.toString() : '';
    };

    async fetchDataFromExcelAndValidate() {
        const landingpage = new LandingPageLocators(this.page);
        const filePath = path.resolve(__dirname + '/../data/searchQueryExcel.xlsx');
        const workbook = new Excel.Workbook();
        const content = await workbook.xlsx.readFile(filePath);

        const worksheet = await content.worksheets[0];
        const rowStartIndex = 2;
        const numberOfRows = await worksheet.rowCount - 2;
        const rows = await worksheet.getRows(rowStartIndex, numberOfRows) ?? [];

        const data = await rows.map((row) => {
            return this.getCellValue(row, 1);
        });

        for (let item of data){
            await landingpage.searchBar.fill(item);
            await landingpage.searchBtn.click();
            const searchResultCount = await landingpage.searchResults.filter({ hasText: `${item}` }).count();
            await expect(searchResultCount).toBeGreaterThan(0);

        }

    }

    async enterUnsucessfullLogin(){
        const baseMethods = new BaseMethods(this.page);
        const loginlocators = new LoginLocators(this.page);
        for (const person of persons){
            await console.log(`Iteration with ${person}`);
            await loginlocators.LoginEmail.fill(await person.username);
            await this.page.waitForTimeout(2000);
            await loginlocators.LoginPassword.fill(await person.password);
            await baseMethods.clickOnElement(loginlocators.LoginBtn);
            await baseMethods.waitForElementToBeVisible(loginlocators.errorAlert);
            await this.page.waitForTimeout(2000);
        }

    }


}