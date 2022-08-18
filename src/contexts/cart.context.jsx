import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


const removeCartItem = (cartItems, cartItemToRemove) => {

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
  }
  return cartItems.map((cartItem) =>
  cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
);

}

const deleteCartItem = (cartItems,cartItemToDelete) => {
  return (cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id));
}


export const CartContext = createContext({
  isCartOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: (item) => {},
  removeItemFromCart: (item) => {},
  deleteItemFromCart: (item)=> {},
  cartCount: 0,
  setCartCount: () => {},
  totalPrice:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(()=> {
    const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity ,0);
    setCartCount(newCartCount);
  },
  [cartItems])

  useEffect(()=>{
    const newPrice = cartItems.reduce((total, cartItem)=> total + cartItem.quantity*cartItem.price, 0);
    setTotalPrice(newPrice);
  },[cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));

  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems,cartItemToDelete));
  }


  const value = {
    isCartOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartCount,
    setCartCount,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
