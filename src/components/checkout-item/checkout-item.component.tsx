import React, {FC} from 'react';
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from "./checkout-item.styles";
import {useSelector, useDispatch} from 'react-redux';
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from "../../store/cart/cart.action";
import { CartItem } from '../../store/cart/cart.types';


type CheckOutItemProps = {
  cartItem:CartItem
}

const CheckOutItem: FC<CheckOutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={deleteItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckOutItem;
