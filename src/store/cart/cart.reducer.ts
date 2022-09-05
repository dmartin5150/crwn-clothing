import { CartItem } from "./cart.types";
import { setCartItems, setCartIsOpen } from "./cart.action";
import {AnyAction} from 'redux';


export type Cart_State = {
  readonly isCartOpen:boolean,
  readonly cartItems:CartItem[]
}


const CART_INITIAL_STATE:Cart_State = {
  isCartOpen: false,
  cartItems: []
};

export const cartReducer = (state=CART_INITIAL_STATE, action: AnyAction):Cart_State => {
  if (setCartItems.match(action)){
    return { ...state, cartItems:action.payload };
  }
  if (setCartIsOpen.match(action)){
    return {...state, isCartOpen: action.payload};
  }
  return state;


};