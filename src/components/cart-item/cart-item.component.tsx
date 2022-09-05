import React, {FC} from 'react';
import {CartItemContainer, ItemDetails} from  "./cart-item.styles";
import {CartItem as TCartItem  } from '../../store/cart/cart.types';


type CartItemProps = {
  item: TCartItem
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
