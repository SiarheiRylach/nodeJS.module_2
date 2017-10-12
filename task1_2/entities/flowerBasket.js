/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */
const AbstractFlower = require('./abstractFlower');

class FlowerBasket extends AbstractFlower{
    constructor(price, countryFrom, dateOfReceipt, count = "not specified") {
        super(price, countryFrom, dateOfReceipt);
        this.countOfFlowers = count;
    }
}

module.exports = FlowerBasket;