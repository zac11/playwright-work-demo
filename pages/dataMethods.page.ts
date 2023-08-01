import { Locator, Page, expect } from "@playwright/test";
import LandingPageLocators from "../locators/landingpage.locator";
import * as path from 'path';
import Excel from 'exceljs';


export default class dataMethods {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    readonly getCellValue = (row: Excel.Row, cellIndex: number) => {
        const cell = row.getCell(cellIndex);

        return cell.value ? cell.value.toString() : '';
    };

    async fetchDataFromExcel() {
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
            
        }

    }


}