/**
 * Created by Siarhei_Rylach on 10/19/2017.
 */

'use strict';

class signedUserMenu{
    constructor(){
        this.menu = element(by.css('summary[aria-label="View profile and more"]'));
        this.logout = element(by.className('dropdown-signout'));
    }
}
module.exports = signedUserMenu;