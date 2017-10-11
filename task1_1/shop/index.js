/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
const util = require('util');

let Shop =( ()=>{
    let instance;
    
    function ShopSingleton() {
        if(! instance ){
            this.order = [];
            instance = this;
        }

        return instance;
    }

    ShopSingleton.prototype.addToOrder = function(elem){

        if( (typeof elem === "object") && ("price" in elem) ){
            instance.order.push(elem);
        }

        console.log("It's not a product from this shop");
    };

    ShopSingleton.prototype.getPriceOrder = function(){
        return instance.order.reduce((sum, current)=>{
            return sum + current.price;
        }, 0);
    };

    return ShopSingleton;
} )();

module.exports = Shop;