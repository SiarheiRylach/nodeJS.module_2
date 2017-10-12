/**
 * Created by Siarhei_Rylach on 10/11/2017.
 */
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
        }else{
            console.log("It's not a product from this shop");
        }
    };

    ShopSingleton.prototype.getPriceOrder = function(){
        return instance.order.reduce((sum, current)=>{
            return sum + current.price;
        }, 0);
    };

    ShopSingleton.prototype.sortLowToHigh = function(){
        this.order.sort((a, b )=>{
            return a.price - b.price;
        });
    };

    ShopSingleton.prototype.sortHighToLow = function(){
        this.order.sort((a, b )=>{
            return  b.price - a.price;
        });
    };

    return ShopSingleton;
} )();

module.exports = Shop;