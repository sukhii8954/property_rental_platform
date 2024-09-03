import React, { createContext, useContext, useEffect, useReducer } from 'react'


const CartContext = createContext();

const cartReducer = (state,action) => {
//    console.log('cartAction:', action);
    // applying if else condition use switch case for better code

    switch(action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item already exists in the cart, update its quantity
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'UPDATE_CART_ITEM':
            return state.map(item => 
                item.id ===action.payload.id ? {...item , ...action.payload.updates} :item);
        case 'CLEAR_CART':
            return [];

        default:
           return state;
    };
};

export const CardProvider = ({children}) => {
   const [cart , dispatch] = useReducer(cartReducer ,[], () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
   });

   useEffect(() => {
     localStorage.setItem('cart', JSON.stringify(cart));
   }, [cart])
   

    const addToCart = (property) => {
        dispatch({type : 'ADD_TO_CART' , payload: property});
    };

    const removeFromCart = (id) => {
        dispatch({type :'REMOVE_FROM_CART' , payload: id });
    };

    const updateCartItem = (id,updates) =>{
        dispatch({type: 'UPDATE_CART_ITEM', payload: {id , updates}});
    };

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'});
    };



    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,updateCartItem , clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext);