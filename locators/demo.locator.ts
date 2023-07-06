import { Page,Locator } from "@playwright/test";


export default class HeaderLocators{
    readonly page : Page;
    readonly WelcomeMessasgeLocator : Locator;
    readonly SignInLocator : Locator;
    readonly CreateAccountLocator : Locator;
    readonly WebsiteLogo : string;

    constructor(page: Page){
        this.page = page;
        this.WelcomeMessasgeLocator = page.getByRole(`banner`).getByText(`Default welcome msg!`);
        this.SignInLocator = page.getByRole('link', { name: 'Sign In' });
        this.CreateAccountLocator = page.getByRole('link', { name: 'Create an Account' });
        this.WebsiteLogo = `a[aria-label='store logo']`;
    }
}