import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';
import {useContext} from 'react';


import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {

  const {isCartOpen, setCartIsOpen, cartCount} = useContext(CartContext);

  const toggle = () => {
    setCartIsOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon className='svg' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>)
}
export default CartIcon;