/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

function FlowersForBunch(color , height) {
    this.color = color;
    this.height = height;

}

FlowersForBunch.prototype = Object.create(Flower.prototype);
FlowersForBunch.prototype.constructor = FlowersForBunch;