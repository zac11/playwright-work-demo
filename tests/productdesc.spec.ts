import { test, Page } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import AddToCart from "../pages/addToCart.page";
import MenuLocator from "../locators/menubar.locator";
import ProductDesc from "../pages/productDesc.page";

let baseMethods;
let productdesc;


test.describe(`Open product description from landing page`, async () => {

    test.beforeEach(async ({ page }) => {
        baseMethods = new BaseMethods(page);
        productdesc = new ProductDesc(page);
        const menulocator = new MenuLocator(page);
        await baseMethods.goToURL();
        await baseMethods.waitForElementToBeVisible(menulocator.WebsiteLogo);
        await productdesc.gotoProductPageFromLandingPage();
    });

    test(`Go to a product from landing page and validate the thumbnails`, async ({ page }) => {
        await productdesc.validateThumbNails();

    });

    test(`Go to a product from landing page and validate product desc not empty`, async ({ page }) => {
        await productdesc.productDescriptionNotEmpty();

    });


    test(`Go to a product from landing page and validate product specification not empty if that tab exists`, async ({ page }) => {
        await productdesc.productSpecificationNotEmpty();
    });

    test(`Go to a product from landing page and validate reviews tab exists`, async ({ page }) => {
        await productdesc.productReivewTab();

    });

    test(`Go to a product from landing page and review action buttons - add to cart`, async ({ page }) => {
        await Promise.all([
            productdesc.productPageWishListIcon(),
            productdesc.productPageCompareProduct()
        ]);

    })





})