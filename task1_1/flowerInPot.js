/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
function FlowerInPot(height, potDiameter){
    Flower.apply(this, arguments);
    this.height = height || "not specified";
    this.potDiameter = potDiameter;
}

FlowerInPot.prototype = Object.create(Flower.prototype);
FlowerInPot.prototype.constructor = FlowerInPot;