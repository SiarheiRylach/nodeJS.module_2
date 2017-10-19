/**
 * Created by Siarhei_Rylach on 10/17/2017.
 */
'use strict';

const HomePage =require('./home.page.js');
const Login =require('./login.page.js');
const SignedUserMenu =require('./signedUser.menu.js');
const MainPage =require('./main.page.js');

class World{
    constructor(){
        this.homePage = new HomePage();
        this.loginPage = new Login();
        this.signedUserMenu = new SignedUserMenu();
        this.mainPage = new MainPage();
    }
}

module.exports = new World();