import { Locator,Page } from "@playwright/test";

export default class DesktopProductListingPage{

    readonly allDesktops : Locator;
    readonly categoryName : Locator;
    readonly categoryDesc : Locator;
    readonly refineSearchOptions : Locator;
    readonly listView : Locator;
    readonly listViewClass : Locator;
    readonly GridView : Locator;
    readonly GridViewClass : Locator;
    readonly sortingOptions : Locator;
    readonly leftViewColumn : Locator;
    readonly productLayout : Locator;
    readonly productThumbnailURL : Locator;
    readonly productThumbnailImage : Locator;
    readonly countOfResults : Locator;
    

    constructor(page: Page){

        this.allDesktops = page.getByText('Show AllDesktops');
        this.categoryName = page.locator(`h2`);
        this.categoryDesc = page.locator(`div.col-sm-10`);
        this.refineSearchOptions = page.locator(`.col-sm-3`);
        this.listView = page.locator(`#list-view`);
        this.listViewClass = page.locator(`.product-list`);
        this.GridView = page.locator(`#grid-view`);
        this.GridViewClass = page.locator(`.product-grid`);
        this.sortingOptions = page.locator(`#input-sort`);
        this.leftViewColumn = page.locator(`.list-group`);
        this.productLayout = page.locator(`.product-layout`);
        this.productThumbnailURL = page.locator(`div.iamge a`);
        this.productThumbnailImage = page.locator(`div.image`);
        this.countOfResults = page.locator(`.col-sm-6.text-right`);







    }
}