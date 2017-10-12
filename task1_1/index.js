/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

const FlowerInPot = require('./entities/flowerInPot');
const FlowerBasket = require('./entities/flowerBasket');
const Shop = require('./shop');
const Bunch = require('./bunch');
const Flower = require('./entities/flower');

let shop = new Shop();

shop.addToOrder(new FlowerInPot(200, undefined, undefined, undefined, undefined));
shop.addToOrder(new FlowerInPot(300, undefined, undefined, undefined, undefined));

shop.addToOrder(new FlowerBasket(150, "Italy", new Date(3000000), 10));
let bunchOfRoses = new Bunch();
bunchOfRoses.addFlower(new Flower(50, "France", new Date(), 50, "red"));
bunchOfRoses.addFlower(12312);
bunchOfRoses.addFlower(new Flower(300, "Germany", new Date(), 60, "pink"));

shop.addToOrder(bunchOfRoses);

console.log(shop.getPriceOrder());
console.log(shop);
