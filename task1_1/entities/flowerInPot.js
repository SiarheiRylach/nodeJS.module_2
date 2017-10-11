/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
const AbstractFlower = require('./abstractFlower');

function FlowerInPot(price, countryFrom, dateOfReceipt, height = "not specified", potDiameter = "not specified"){
    AbstractFlower.apply(this, arguments);
    this.height = height;
    this.potDiameter = potDiameter;
}

FlowerInPot.prototype = Object.create(AbstractFlower.prototype);
FlowerInPot.prototype.constructor = FlowerInPot;


module.exports = FlowerInPot;

