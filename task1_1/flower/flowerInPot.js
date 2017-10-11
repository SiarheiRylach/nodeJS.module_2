/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
const Flower = require('./flower');

function FlowerInPot(price, countryFrom, dateOfReceipt, height = "not specified", potDiameter){
    Flower.apply(this, arguments);
    this.height = height;
    this.potDiameter = potDiameter;
}

FlowerInPot.prototype = Object.create(Flower.prototype);
FlowerInPot.prototype.constructor = FlowerInPot;


module.exports = FlowerInPot;

