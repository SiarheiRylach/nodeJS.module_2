class Login {
    constructor() {
        this.url = "https://github.com/login";
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.contentPage = element(by.tagName('body'));
        this.login = element(by.id("login_field"));
        this.password = element(by.id("password"));
        this.signInBtn = element(by.css('input[type="submit"]'));
    };
}

module.exports = Login;