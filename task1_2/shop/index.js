/**
 * Created by Siarhei_Rylach on 10/12/2017.
 */
class Shop{

    constructor() {
        this.order = [];
    }

    addToOrder(elem){

        if( (typeof elem === "object") && ("price" in elem) ){
            this.order.push(elem);
        }else{
            console.log("It's not a product from this shop");
        }
    }

    getPriceOrder(){
        return this.order.reduce((sum, current)=>{
            return sum + current.price;
        }, 0);
    }

    sortLowToHigh(){
        this.order.sort((a, b )=>{
            return a.price - b.price;
        });
    }

    sortHighToLow(){
        this.order.sort((a, b )=>{
            return  b.price - a.price;
        });
    }

}

module.exports = Shop;