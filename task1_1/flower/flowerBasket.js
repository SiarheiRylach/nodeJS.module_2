/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

const Flower = require('./flower');

function FlowerBasket(price, countryFrom, dateOfReceipt, count = "not specified") {
    Flower.apply(this, arguments);
    this.countOfFlowers  = count;
}


FlowerBasket.prototype = Object.create(Flower.prototype);
FlowerBasket.prototype.constructor = FlowerBasket;