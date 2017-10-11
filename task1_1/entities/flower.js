/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
const AbstractFlower = require('./abstractFlower');

function Flower(price, countryFrom, dateOfReceipt, height, color){
    AbstractFlower.apply(this, arguments);
    this.color = color;
    this.height = height;

}

Flower.prototype = Object.create(AbstractFlower.prototype);
Flower.prototype.constructor = Flower;

module.exports = Flower;