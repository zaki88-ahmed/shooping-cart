
const RootReducer = (cart = [], action) => {
   
    if (action.type == 'ADD TO CART') {
        console.log(action.payload);
        let temporaryCart = cart.filter((items)=> items.id === action.payload.id)
        if (temporaryCart < 1) {
            return [...cart, action.payload];
        }
        else{
            return cart;
        }
    }

    if(action.type == 'REMOVE CART'){
        return cart.filter((items)=> items.id !== action.payload.id);
    }

    if(action.type == "INCREMENT"){
        let temporaryCart = cart.map((items)=>{
            if (items.id === action.payload.id) {
                return {...items, quantity:items.quantity + 1}
                
            }
            return items;
        })
        return temporaryCart;
    }


    if(action.type == "DECREMENT"){
        let temporaryCart = cart.map((items)=>{
            if (items.id === action.payload.id) {
                return {...items, quantity:items.quantity - 1}
                
            }
            return items;
        })
        return temporaryCart;
    }

    return cart;

}
 
export default RootReducer;