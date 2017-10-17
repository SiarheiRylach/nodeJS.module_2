/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */
const FlowerInPot = require('./entities/flowerInPot');
const FlowerBasket = require('./entities/flowerBasket');
const Shop = require('./shop');
const Bunch = require('./bunch');
const Flower = require('./entities/flower');
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/flowershop", function(err, db) {

	if(err){
		throw err;
	}

	 new Promise((resolve, reject)=>{
	 	db.collection('flower').find({}).toArray(function(err, items){
	 		let shop = new Shop();
	 		let bunch = new Bunch();
	 		items.forEach(elem=>{
	 			bunch.addFlower(new Flower(elem.price, elem.country, new Date(), elem.height, elem.color));
	 		});
	 		shop.addToOrder(bunch);

		 	resolve(shop);
	 	});
	 })
	 .then(shop=>{
	 	return new Promise((resolve, reject)=>{
	 		db.collection('flower_basket').find({}).toArray(function(err, items){
		 		items.forEach(elem=>{
	 				shop.addToOrder(new FlowerBasket(elem.price, elem.country, new Date(3000000), elem.count));
	 			});	
		 		resolve(shop);
	 		});
	 	});
	 })
	 .then(shop=>{
	 	return new Promise((resolve, reject)=>{
	 		db.collection('flower_in_pot').find({}).toArray(function(err, items){
		 		items.forEach(elem=>{
	 				shop.addToOrder(new FlowerInPot(elem.price, elem.country, new Date(), elem.height, elem.potD));
	 			});		
		 		resolve(shop);
	 		});
	 	});
	 })
	 .then((shop)=>{
	 	console.log(shop.getPriceOrder());

	 	shop.sortHighToLow();
		console.log(shop);

		shop.sortLowToHigh();
		console.log(shop);
	 })
	 .then(()=>db.close());
});