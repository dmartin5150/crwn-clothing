import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type SetCartIsOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_IS_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const setCartIsOpen = withMatcher(
  (isOpen: boolean): SetCartIsOpen =>
    createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, isOpen)
);

export const getCartItemDescription = (newCartItems: CartItem[]) => {
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
    cartCount: newCartCount,
  };
  return cartDescription;
};

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      const newItems = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      return setCartItems(newItems);
    }
    const newItems = [...cartItems, { ...productToAdd, quantity: 1 }];
    return setCartItems(newItems);
  };

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem):CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem !== undefined) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== existingCartItem.id
      );
    }
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems: CartItem[], cartItemToDelete: CartItem):CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
    const newItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newItems);
  };

export const deleteItemFromCart = (cartItems: CartItem[], cartItemToDelete: CartItem): SetCartItems => {
    const newItems = deleteCartItem(cartItems, cartItemToDelete);
    return setCartItems(newItems);
  };
