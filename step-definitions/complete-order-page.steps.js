import { When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees Complete order page$/, async function () {
    await pages.completeOrderPage.checkoutCompleteContainer.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'checkout summary was not displayed',
    });
});