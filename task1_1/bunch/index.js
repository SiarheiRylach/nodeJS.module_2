/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
let Flower = require('../flower/flower');

function Bunch() {
    this.flowers = [];
    Object.defineProperty(this, "price", {
        get: ()=>{
            return this.flowers.reduce((sum, current)=>{
                return sum + current.price;
            }, 0);
        }
    });

}

Bunch.prototype.addFlower = (flower)=>{
    if(flower instanceof Flower){
        this.flowers.push(flower);
    }

    // to do add console.log for incorrect type
};

module.exports = Bunch;



