import { Page,Locator } from "@playwright/test";


export default class LandingPageLocators{

   
    readonly majorthumbnail : Locator;
    readonly minorthumbnail : Locator;
    readonly descriptionTab : Locator;
    readonly SpecificationTab : Locator;
    readonly ReviewsTab : Locator;
    readonly AddtoWishList : Locator;
    readonly CompareProduct : Locator;
    readonly ProductName : Locator;
    readonly ProductDetails : Locator;
    readonly ProductPrice : Locator;
    readonly AddToCart : Locator;
    readonly AddToCartString : string;
    readonly productPage : Locator;
    readonly productReviewForm : Locator;
    readonly productQuantity : Locator;



    constructor(page : Page){
        this.productPage = page.getByText('iPhone', { exact: true });
        this.majorthumbnail = page.locator(`.thumbnail`).nth(0);
        this.minorthumbnail = page.locator(`li.image-additional`);
        this.descriptionTab = page.getByText(`Description`);
        this.SpecificationTab = page.getByText(`Specification`);
        this.ReviewsTab = page.getByRole('link', { name: 'Reviews (0)' })
        this.AddtoWishList = page.getByRole('button', { name: '' }).nth(1);
        this.CompareProduct = page.getByRole('button', { name: '' }).nth(1)
        this.ProductName = page.locator(`h1`).nth(1);
        this.ProductDetails = page.locator(`.list-unstyled`).nth(7);
        this.ProductPrice = page.locator(`h2`).nth(1);
        this.AddToCart = page.locator(`#button-cart`);
        this.AddToCartString = `#button-cart`;
        this.productReviewForm = page.locator(`#form-review`);
        this.productQuantity = page.locator(`#input-quantity`);
    }
}