import { Then, When } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user checks data table$/, async function (dataTable) {
    //console.log(dataTable.raw());
    //console.log(dataTable.rows());
    //console.log(dataTable.rowsHash());
    console.log(dataTable.hashes());
});

Then(/^user sees correct product details$/, async function () {
    await pages.productItemPage.productItemName.waitForDisplayed( {
        timeout: 5000,
        timeoutMsg: 'Product Item Name Was Not Displayed',
    });

    await pages.productItemPage.validateProductItemDetails(
        this.productName, 
        this.productDescription, 
        this.productPrice
    )
});

When(/^user clicks on the Add to cart button$/, async function () {
    await pages.productItemPage.AddToCartButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Add to cart button was not displayed',
    });
    await pages.productItemPage.AddToCartButton.click();
});

When(/^user sees item added to cart$/, async function () {
   await pages.productPage.shoppingBadgeIcon.waitForExist({
        timeout: 5000,
        reverse: false,
        timeoutMsg: "Shopping cart is empty",
    });
});

When(/^user clicks on the cart$/, async function () {
   await pages.productItemPage.CartButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Add to cart button was not displayed',
    });
    await pages.productItemPage.CartButton.click();
});