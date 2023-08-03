import { Page, Locator } from "@playwright/test";

export default class ProductDesc{
    readonly thumbnails : Locator;
    readonly descriptionTab : Locator;
    readonly SpecificationTab : Locator;
    readonly ReviewsTab : Locator;
    readonly AddtoWishList : Locator;
    readonly CompareProduct : Locator;
    readonly ProductName : Locator;
    readonly ProductDetails : Locator;
    readonly ProductPrice : Locator;
    readonly AddToCart : Locator;


    constructor(page: Page){
        this.thumbnails = page.locator(`.thumbnails`);
        this.descriptionTab = page.getByText(`Description`);
        this.SpecificationTab = page.getByText(`Specification`);
    }
}