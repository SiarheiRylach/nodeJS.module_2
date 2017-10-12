/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */
let Flower = require('../entities/flower');

class Bunch{
    constructor(){
        this.flowers = [];
        this._price = 0;
    }

    get price(){
        return this._price = this.flowers.reduce((sum, current)=>{
            return sum + current.price;
        }, 0);
    }

    addFlower(flower) {
        if (flower instanceof Flower) {
            this.flowers.push(flower);
        } else {
            console.log("It's not a flower");
        }
    }
}

module.exports = Bunch;