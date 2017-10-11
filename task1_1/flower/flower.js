/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
const AbstractFlower = require('./abstractFlower');

function FlowerForBunch(price, countryFrom, dateOfReceipt, height, color){
    AbstractFlower.apply(this, arguments);
    this.color = color;
    this.height = height;

}

FlowerForBunch.prototype = Object.create(AbstractFlower.prototype);
FlowerForBunch.prototype.constructor = FlowerForBunch;

module.exports = FlowerForBunch;