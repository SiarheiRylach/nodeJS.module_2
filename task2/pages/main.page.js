/**
 * Created by Siarhei_Rylach on 10/19/2017.
 */

class Main {
    constructor() {
        this.url = "https://github.com/";
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.startProjectBtn = element(by.linkText('Start a project'));
    };
}

module.exports = Main;