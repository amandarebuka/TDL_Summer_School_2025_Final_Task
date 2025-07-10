import { When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees Checkout page$/, async function () {
    await pages.checkoutPage.checkoutInfoConatiner.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'checkout was not displayed',
    });
});

When(/^user inputs first name - "([^"]*)"$/, async function (firstName) {
    await pages.checkoutPage.firstNameInputField.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'First name input field was not displayed',
    });
    await pages.checkoutPage.firstNameInputField.setValue(firstName);
});

When(/^user inputs last name - "([^"]*)"$/, async function (lastName) {
    await pages.checkoutPage.lastNameInputField.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Last name input field was not displayed',
    });
    await pages.checkoutPage.lastNameInputField.setValue(lastName);
});

When(/^user inputs postal code - "([^"]*)"$/, async function (postalCode) {
    await pages.checkoutPage.postalCodeInputField.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Postal Code input field was not displayed',
    });
    await pages.checkoutPage.postalCodeInputField.setValue(postalCode);
});

When(/^user clicks on the continue button$/, async function () {
    await pages.checkoutPage.continueButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Continue button was not displayed',
    });
    await pages.checkoutPage.continueButton.click();
});
