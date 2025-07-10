import { Given, When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Given(/^user is on the SwagLabs login page$/, async function () {
    await pages.loginPage.loginContainer.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Login container was not displayed',
    });
});

When(/^user inputs username - "([^"]*)"$/, async function (username) {
    await pages.loginPage.usernameInputField.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Username input field was not displayed',
    });
    await pages.loginPage.usernameInputField.setValue(username);
});

When(/^user inputs password - "([^"]*)"$/, async function (password) {
    await pages.loginPage.passwordInputField.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Password input field was not displayed',
    });
    await pages.loginPage.passwordInputField.setValue(password);
});

When(/^user clicks on the login button$/, async function () {
    await pages.loginPage.loginButton.waitForDisplayed({
        timeout:  5000,
        timeoutMsg: 'Login button was not displayed',
    });
    await pages.loginPage.loginButton.click();
});