/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */
const AbstractFlower = require('./abstractFlower');

class Flower extends AbstractFlower{

    constructor(price, countryFrom, dateOfReceipt, height, color) {
        super(price, countryFrom, dateOfReceipt);
        this.color = color;
        this.height = height;
    }

}

module.exports = Flower;