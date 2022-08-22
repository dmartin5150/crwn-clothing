import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context.jsx";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteItemHandler = () => deleteItemFromCart(cartItem);

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
