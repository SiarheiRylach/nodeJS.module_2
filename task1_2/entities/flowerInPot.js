/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */
const AbstractFlower = require('./abstractFlower');

class FlowerInPot extends AbstractFlower{
    constructor(price, countryFrom, dateOfReceipt, height = "not specified", potDiameter = "not specified") {
        super(price, countryFrom, dateOfReceipt);
        this.height = height;
        this.potDiameter = potDiameter;
    }
}

module.exports = FlowerInPot;