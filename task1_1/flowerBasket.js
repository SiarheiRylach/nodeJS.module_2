/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
function FlowerBasket(count) {
    this.countOfFlowers  = count || "not specified";
}


FlowerBasket.prototype = Object.create(Flower.prototype);
FlowerBasket.prototype.constructor = FlowerBasket;