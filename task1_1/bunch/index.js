/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
let Flower = require('../entities/flower');

function Bunch() {
    this.flowers = [];
    Object.defineProperty(this, "price", {
        get: function(){
            return this.flowers.reduce((sum, current)=>{
                return sum + current.price;
            }, 0);
        }
    });

}

Bunch.prototype.addFlower = function(flower){
    if(flower instanceof Flower){
        this.flowers.push(flower);
    }else{
        console.log("It's not a flower");
    }
};

module.exports = Bunch;



