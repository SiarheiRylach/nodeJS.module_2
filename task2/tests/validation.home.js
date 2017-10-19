"use strict";

const world = require('../pages/world');
const expect=require('chai').expect;

module.exports = function () {
    this.Given(/^I am on Home page$/, ()=>{
        return world.homePage.openPage();
    });

    this.Then(/^Page title should be "(.*)"$/, (title) => {
        return browser.getTitle().then((text)=>{
            return expect(text).to.equal(title);
        });
    });

    this.Then(/^Page has link with text "(.*)"$/, (elem) => {
        return world.homePage.signIn.getText().then((result)=>{
            return expect(result).to.equal(elem);
        });
    });

    this.Then(/^Page contains link with text "(.*)"$/, (elem) => {
        return world.homePage.signUp.getText().then((result)=>{
            return expect(result).to.equal(elem);
        });
    });

    this.Then(/^Page contains "(.*)" forms for registration$/, (expectedNumber) => {
        return world.homePage.registrationForms.then((result)=>{
            return expect(result.length).to.equal(+expectedNumber);
        });
    });
};