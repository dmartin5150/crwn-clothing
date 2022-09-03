import React from 'react';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';
// import {useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selector.js';
import {setCartIsOpen} from '../../store/cart/cart.action';

// import { CartContext } from '../../contexts/cart.context.jsx';


const CartIcon = () => {

  const dispatch = useDispatch();

  // const {isCartOpen, setCartIsOpen, cartCount} = useContext(CartContext);
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggle = () => {
    dispatch(setCartIsOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon className='svg' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>)
}
export default CartIcon;