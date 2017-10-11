/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */

const AbstractFlower = require("../flower/abstractFlower");

let Shop =( ()=>{
    let instance;
    
    function ShopSingleton() {
        if(! instance ){
            this.order = [];
            instance = this;
        }

        return instance;
    }

    ShopSingleton.prototype.addToOrder = (elem)=>{

        if("price" in elem){
            instance.order.push(elem);
        }

        // to do add console.log for incorrect type
    };

    ShopSingleton.prototype.getPriceOrder = ()=>{
        return instance.order.reduce((sum, current)=>{
            return sum + current.price;
        }, 0);
    };

    return ShopSingleton;
} )();

module.exports = Shop;