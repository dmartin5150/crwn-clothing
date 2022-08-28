import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";


export const setCartIsOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, boolean);


export const getCartItemDescription = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    const cartDescription = {
      cartItems: newCartItems,
      totalPrice: newPrice,
      cartCount: newCartCount
    }
    return cartDescription;
  };

  export const addItemToCart = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      const newItems = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newItems);
    }
    const newItems = [...cartItems, { ...productToAdd, quantity: 1 }]
    console.log('newitems', newItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newItems);
  };


  const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const deleteCartItem = (cartItems, cartItemToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
  };

  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newItems);
  };

  export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    const newItems = deleteCartItem(cartItems, cartItemToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newItems);
  };