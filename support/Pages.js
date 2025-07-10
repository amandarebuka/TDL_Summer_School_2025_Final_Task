import { LoginPage } from "../page-objects/LoginPage.js"
import { ProductPage } from "../page-objects/ProductPage.js"
import { ProductItemPage } from "../page-objects/ProductItemPage.js"
import { ProductCartPage } from "../page-objects/ProductCartPage.js"
import { CheckoutPage } from "../page-objects/CheckoutPage.js"
import { OverviewPage } from "../page-objects/OverviewPage.js"
import { CompleteOrderPage } from "../page-objects/CompleteOrderPage.js"

class Pages {
    constructor() {
        this.loginPage = new LoginPage();
        this.productPage = new ProductPage();
        this.productItemPage = new ProductItemPage();
        this.productCartPage = new ProductCartPage();
        this.checkoutPage = new CheckoutPage();
        this.overviewPage = new OverviewPage();
        this.completeOrderPage = new CompleteOrderPage();
    }
}

export const pages = new Pages();