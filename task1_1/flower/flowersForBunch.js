/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
const Flower = require('./flower');

function FlowerForBunch(price, countryFrom, dateOfReceipt, height, color){
    Flower.apply(this, arguments);
    this.color = color;
    this.height = height;

}

FlowersForBunch.prototype = Object.create(Flower.prototype);
FlowersForBunch.prototype.constructor = FlowerForBunch;