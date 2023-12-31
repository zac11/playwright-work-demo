import { Locator, Page, expect } from "@playwright/test";
import LandingPageLocators from "../locators/landingpage.locator";
import { persons } from '../data/searchQueryJson.json';
import * as path from 'path';
import Excel from 'exceljs';
import * as fs from 'fs';
//import * as yaml from 'js-yaml';
import BaseMethods from "./baseMethods.page";
import LoginLocators from "../locators/login.locator";
import * as yaml from 'yaml';

interface UserData {
    username: string;
    password: string;
}

export default class dataMethods {
    readonly page: Page;
    private readonly landingpage : LandingPageLocators;
    private readonly basemethods : BaseMethods;
    private readonly loginlocators : LoginLocators;

    constructor(page: Page) {
        this.page = page;
        this.landingpage = new LandingPageLocators(this.page);
        this.basemethods = new BaseMethods(this.page);
        this.loginlocators = new LoginLocators(this.page);
    }

    readonly getCellValue = (row: Excel.Row, cellIndex: number) => {
        const cell = row.getCell(cellIndex);

        return cell.value ? cell.value.toString() : '';
    };

    async fetchDataFromExcelAndValidate() {
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

        for (let item of data) {
            await this.landingpage.searchBar.fill(item);
            await this.page.waitForTimeout(2000);
            await this.landingpage.searchBtn.click();
            await this.page.waitForTimeout(2000);
            const searchResultCount = await this.landingpage.searchResults.filter({ hasText: `${item}` }).count();
            await this.page.waitForTimeout(2000);
            await expect(searchResultCount).toBeGreaterThan(0);

        }

    }

    async enterUnsucessfullLoginUsingJson() {
        for (const person of persons) {
            await console.log(`Iteration with await ${person}`);
            await this.loginlocators.LoginEmail.fill(await person.username);
            await this.page.waitForTimeout(2000);
            await this.loginlocators.LoginPassword.fill(await person.password);
            await this.basemethods.clickOnElement(this.loginlocators.LoginBtn);
            await this.basemethods.waitForElementToBeVisible(this.loginlocators.errorAlert);
            await this.page.waitForTimeout(2000);
        }

    }


    async enterUnsuccessfullLoginUsingYaml() {
        const baseMethods = new BaseMethods(this.page);
        const loginlocators = new LoginLocators(this.page);
        try {
            const fileContents: string = await fs.promises.readFile('./data/searchQueryYaml.yaml', 'utf8');
            const parsedData: any = yaml.parse(fileContents);
            console.log(parsedData);

            for (const userData of parsedData.data) {
                await this.loginlocators.LoginEmail.fill(await userData.username);
                await this.loginlocators.LoginPassword.fill(await userData.password);
                await this.page.waitForTimeout(2000);
                await this.basemethods.clickOnElement(this.loginlocators.LoginBtn);
                await this.basemethods.waitForElementToBeVisible(this.loginlocators.errorAlert);
                await this.page.waitForTimeout(2000);

                // Perform assertions or other actions for each user login
            }

        } catch (e) {
            console.log(e);
        }

    }

}