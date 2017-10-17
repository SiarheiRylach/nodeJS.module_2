/**
 * Created by Siarhei_Rylach on 10/17/2017.
 */
'use strict';

const HomePage =require('./home.page.js');

class World{
    constructor(){
        this.homePage = new HomePage();
    }
}

module.exports = new World();