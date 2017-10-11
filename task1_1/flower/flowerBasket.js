/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

const AbstractFlower = require('./abstractFlower');

function FlowerBasket(price, countryFrom, dateOfReceipt, count = "not specified") {
    AbstractFlower.apply(this, arguments);
    this.countOfFlowers  = count;
}

FlowerBasket.prototype = Object.create(AbstractFlower.prototype);
FlowerBasket.prototype.constructor = FlowerBasket;

module.exports = FlowerBasket;