/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

function AbstractFlower(price, countryFrom = "Belarus", dateOfReceipt = new Date()){
    this.price = price;
    this.countryFrom = countryFrom;
    this.dateOfReceipt = dateOfReceipt;
}

AbstractFlower.prototype.smell = function(){
    console.log("it's is smelling")
};

module.exports = AbstractFlower;






