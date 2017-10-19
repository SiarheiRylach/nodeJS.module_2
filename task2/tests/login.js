/**
 * Created by Siarhei_Rylach on 10/19/2017.
 */

"use strict";

const world = require('../pages/world');
const expect=require('chai').expect;
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;

module.exports = function () {
    this.Given(/^I'm on Home page$/, ()=>{
        return world.homePage.openPage();
    });

    this.Then(/^I click link "Sign in"$/, () => {
        return world.homePage.signIn.click();
    });

    this.Then(/^I wait page loaded$/, () => {
        browser.wait(EC.visibilityOf(world.loginPage.contentPage),DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^Title of page should be "(.*)"$/, (title) => {
        return browser.getTitle().then((text)=>{
            return expect(text).to.equal(title);
        });
    });

    this.Then(/^I type "(.*)" to input with label named by "Username or email address"$/, (email) => {
        return world.loginPage.login.sendKeys(email);
    });

    this.Then(/^I type "(.*)" to input with label named by "Password"$/, (password) => {
        return world.loginPage.password.sendKeys(password);
    });

    this.Then(/^I click button "Sign in"$/, () => {
        return world.loginPage.signInBtn.click();
    });

    this.Then(/^I wait main page loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.loginPage.contentPage),DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^Page title is "(.*)"$/, (title) => {
        return browser.getTitle().then((text)=>{
            return expect(text).to.equal(title);
        });
    });

    this.Then(/^Page contains button with text "(.*)"$/, (elem) => {
        return world.mainPage.startProjectBtn.getText().then((result)=>{
            return expect(result).to.equal(elem);
        });
    });

};
