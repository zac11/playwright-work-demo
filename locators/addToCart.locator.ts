import { Locator,Page } from "@playwright/test";


export default class AddToCartLocator{

    readonly desktop : Locator;
    readonly macDesktop : Locator;
    readonly monitor : Locator;
    readonly MacbookAir : Locator;
    readonly successfulAddToCart : Locator;
    readonly addtoCart : Locator;
    readonly addtoCartString : string;
    readonly addtoCartOnProductPage : Locator;
    readonly addtoCartOnProductPageString : string;



    constructor(page : Page){
        this.desktop = page.getByRole('link', { name: 'Desktops' })
        this.macDesktop = page.getByText(`Mac (1)`);
        this.addtoCart = page.locator(`span`,{hasText: `Add to Cart`});
        this.addtoCartString = `button[type='button'] span[class='hidden-xs hidden-sm hidden-md']`;
        this.MacbookAir = page.getByRole('img', { name: 'iPhone 6' }).first();
        this.addtoCartOnProductPage = page.locator(`#button-cart`);
        this.addtoCartOnProductPageString = `#button-cart`;
    }


}