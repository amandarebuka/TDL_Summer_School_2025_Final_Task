import { When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees Cart page$/, async function () {
    await pages.productCartPage.cartContentsConatiner.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'cart contents was not displayed',
    });

    const cartContentsList = await pages.productCartPage.cartContentsList;

    await pages.productCartPage.shoppingBadgeIcon.waitForExist({
        timeout: 5000,
        reverse: false,
        timeoutMsg: "Shopping cart is empty",
    });
});

Then(/^user sees correct cart details$/, async function () {
    await pages.productCartPage.productItemName.waitForDisplayed( {
        timeout: 5000,
        timeoutMsg: 'Product Item Name Was Not Displayed',
    });

    await pages.productCartPage.validateProductItemDetails(
        this.productName, 
        this.productDescription, 
        this.productPrice
    )
});


When(/^user clicks on Checkout$/, async function () {
    await pages.productCartPage.checkoutButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'checkout button was not displayed',
    });
    await pages.productCartPage.checkoutButton.click();
});