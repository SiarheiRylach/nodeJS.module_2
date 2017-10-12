/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */

class AbstractFlower{

    constructor(price, countryFrom = "Belarus", dateOfReceipt = new Date()){
        this.price = price;
        this.countryFrom = countryFrom;
        this.dateOfReceipt = dateOfReceipt;
    }

    smell(){
        console.log("it's is smelling")
    }

}

module.exports = AbstractFlower;