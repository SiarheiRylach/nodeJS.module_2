/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

const FlowerInPot = require('./flower/flowerInPot');
const Shop = require('./shop');
const Bunch = require('./bunch');

let shop = new Shop();

shop.addToOrder(new FlowerInPot(200, undefined, undefined, undefined, undefined));
shop.addToOrder(new FlowerInPot(300, undefined, undefined, undefined, undefined));

console.log(shop.getPriceOrder());