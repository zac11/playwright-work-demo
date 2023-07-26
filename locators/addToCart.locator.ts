import { Locator,Page } from "@playwright/test";


export default class AddToCartLocator{

    readonly desktop : Locator;
    readonly macDesktop : Locator;
    readonly monitor : Locator;
    readonly successfulAddToCart : Locator;
    readonly addtoCart : Locator;


    constructor(page : Page){
        this.desktop = page.getByRole('link', { name: 'Desktops' })
        this.macDesktop = page.getByText(`Mac (1)`);
        this.addtoCart = page.locator(`span`,{hasText: `Add to Cart`});
    }


}