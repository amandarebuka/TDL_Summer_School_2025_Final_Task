import { When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees Products page$/, async function () {
    await pages.productPage.productInventoryConatiner.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Product inventory was not displayed',
    });

    const productInventoryList = await pages.productPage.productInventoryList;

    await expect(productInventoryList).toBeElementsArrayOfSize(6);
    // await pages.productPage.shoppingBadgeIcon.waitForExist({
    //     timeout: 5000,
    //     reverse: true,
    //     timeoutMsg: "Shopping cart is not empty",
    // });
});

When(/^user clicks on the Sorting button$/, async function () {
    await pages.productPage.productSortByButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'sorting button was not displayed',
    });
    await pages.productPage.productSortByButton.click();
});

When(/^user chooses to sort by "([^"]*)"$/, async function (sortingOption) {
    // await pages.productPage.productSortByButton.waitForDisplayed({
    //     timeout:  5000,
    //     timeoutMsg: 'sorting option was not displayed',
    // });
    // await pages.productPage.productSortByButton.click();
    await pages.productPage.chooseSortingOption(sortingOption);
});

Then(/^user sees product "([^"]*)"$/, async function (productName) {
    // await pages.productPage.productSortedItem.waitForDisplayed({
    //     timeout:  5000,
    //     timeoutMsg: 'first sorted product was not displayed',
    // });
    await pages.productPage.checkProductNameById(0, productName);
});

When(/^user selects product item - "([^"]*)"$/, async function (productName) {
    this.productName = productName;
    this.productDescription = await pages.productPage.getProductDescription(productName);
    this.productPrice = await pages.productPage.getProductPrice(productName);

    await pages.productPage.selectProductItem(productName);
});
