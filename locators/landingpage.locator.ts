import { Page,Locator } from "@playwright/test";


export default class LandingPageLocators{

    readonly logoWebsite : Locator;
    readonly navbar : Locator;
    readonly navbarlist : Locator;
    readonly Desktops : Locator;
    readonly Laptops : Locator;
    readonly Components : Locator;
    readonly Mp3Players : Locator;
    readonly menuOptons : Locator;
    readonly searchBar : Locator;
    readonly searchBtn : Locator;
    readonly searchResults : Locator;
    readonly cart : Locator;
    readonly cartText : Locator;
    readonly productDescription : Locator;
    readonly footerPagination : Locator;
    readonly swipeNextButton : Locator;
    readonly footerSectionClass : Locator;



    constructor(page : Page){
        this.logoWebsite = page.locator(`#logo`);
        this.navbar = page.locator(`div.collapse.navbar-collapse.navbar-ex1-collapse`);
        this.navbarlist = page.locator(`.nav.navbar-nav`)
        this.Laptops = page.getByText(`Laptops & Notebooks`);
        this.Components = page.getByText(`Components`);
        this.Mp3Players = page.getByText(`MP3 Players`);
        this.searchBar = page.getByPlaceholder(`Search`);
        this.searchBtn = page.locator(`button.btn.btn-default.btn-lg`);
        this.searchResults = page.locator(`div.caption`);
        this.cart = page.locator(`#cart`);
        this.cartText = page.locator(`#cart-total`);
        this.productDescription = page.locator(`.product-thumb.transition`);
        this.footerPagination = page.locator(`.swiper-pagination-bullet`);
        this.swipeNextButton = page.locator(`.swiper-button-next`);
        this.footerSectionClass = page.locator(`.col-sm-3`);
    }
}