import './cart-icon.styles.scss';
import {useContext} from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

  const {isCartOpen, setCartIsOpen, cartCount} = useContext(CartContext);

  const toggle = () => {
    setCartIsOpen(!isCartOpen);
  }

  return (
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>)
}
export default CartIcon;