import { Page,Locator } from "@playwright/test";


export default class RegisterLocator{
    readonly page : Page;
    readonly FirstNameLocator : Locator;
    readonly SecondNameLocator: Locator;
    readonly EmailLocator : Locator;
    readonly Password : Locator;
    readonly ConfirmPassword : Locator;
    readonly CreateAccountButton : Locator;

    

    constructor(page: Page){
        this.page = page;
        this.FirstNameLocator = page.locator(`#firstname`);
        this.SecondNameLocator = page.locator(`#lastname`);
        this.EmailLocator = page.locator(`#email_address`);
        this.Password = page.locator(`#password`);
        this.ConfirmPassword = page.locator(`#password-confirmation`);
        this.CreateAccountButton = page.getByRole('link', { name: 'Create an Account' });

        
    }
}