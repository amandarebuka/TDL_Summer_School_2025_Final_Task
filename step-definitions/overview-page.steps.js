import { When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees Overview page$/, async function () {
    await pages.overviewPage.checkoutSummaryContainer.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'checkout summary was not displayed',
    });
});

Then(/^user sees correct purchase details$/, async function () {
    await pages.overviewPage.productItemName.waitForDisplayed( {
        timeout: 5000,
        timeoutMsg: 'Product Item Name Was Not Displayed',
    });

    await pages.overviewPage.validateProductItemDetails(
        this.productName, 
        this.productDescription, 
        this.productPrice
    )
});

When(/^user clicks on the finish button$/, async function () {
    await pages.overviewPage.finishButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'finish button was not displayed',
    });
    await pages.overviewPage.finishButton.click();
});
