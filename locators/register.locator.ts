import { Page,Locator } from "@playwright/test";


export default class RegisterLocator{
    readonly page : Page;
    readonly FirstNameLocator : Locator;
    readonly SecondNameLocator: Locator;
    readonly EmailLocator : Locator;
    readonly ContactNumber : Locator;
    readonly Password : Locator;
    readonly ConfirmPassword : Locator;
    readonly CreateAccountButton : Locator;
    readonly PrivacyPolicy : Locator;
    readonly errorAlert : Locator;

    

    constructor(page: Page){
        this.page = page;
        this.FirstNameLocator = page.locator(`#input-firstname`);
        this.SecondNameLocator = page.locator(`#input-lastname`);
        this.EmailLocator = page.locator(`#input-email`);
        this.ContactNumber = page.locator(`#input-telephone`);
        this.Password = page.locator(`#input-password`);
        this.ConfirmPassword = page.locator(`#input-confirm`);
        this.CreateAccountButton = page.locator(`input[value='Continue']`);
        this.PrivacyPolicy = page.locator(`input[value='1'][name='agree']`);
        this.errorAlert = page.locator(`.alert.alert-danger.alert-dismissible`);

        
    }
}