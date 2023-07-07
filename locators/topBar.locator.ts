import { test, Locator, Page } from "@playwright/test";

export default class TopHeaderLocator{

    readonly page: Page;
    readonly CurrencyDropDown : Locator;
    readonly GBPOption : Locator;
    readonly GBPSelected : Locator;
    readonly ContactNumber : Locator;
    readonly MyAccount : Locator;
    readonly Register : Locator;
    readonly Login : Locator;
    readonly WishList : Locator;
    readonly ShoppingCart : Locator;
    readonly Checkout : Locator;

    constructor(page: Page){
        this.page = page;
        this.CurrencyDropDown = page.getByRole(`button`, {name: `Currency`});
        this.GBPOption = page.locator(`button[name='GBP']`);
        this.GBPSelected = page.locator(`.btn.btn-link.dropdown-toggle strong`);
        this.ContactNumber = page.locator(`ul.list-inline li`).nth(1);
        this.MyAccount = page.getByTitle(`My Account`);
        this.Register = page.getByText(`Register`);
        this.Login = page.getByText(`Login`);
        this.WishList = page.getByTitle(`Wish List (0)`);
        this.ShoppingCart = page.getByTitle(`Shopping Cart`);
        this.Checkout = page.getByTitle(`Checkout`);
        
    }

    
}