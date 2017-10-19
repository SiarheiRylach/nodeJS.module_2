/**
 * Created by Siarhei_Rylach on 10/19/2017.
 */

'use strict';
const world = require('../pages/world');

module.exports = function () {
    this.After({tags: ['@role(logout)']}, () => {
        return world.mainPage.openPage()
            .then(() => {
                return world.signedUserMenu.menu.click();
            })
            .then(() => {
                return world.signedUserMenu.logout.click();
            });
    });
};