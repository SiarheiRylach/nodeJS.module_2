/**
 * Created by Siarhei_Rylach on 10/17/2017.
 */
'use strict';

class Home {
    constructor() {
        this.url = "https://github.com/";
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.signIn = element(by.linkText('Sign in'));
        this.signUp = element(by.linkText('Sign up'));
        this.registrationForms = element.all(by.css('form[action="/join"]'));
    };
}

module.exports = Home;