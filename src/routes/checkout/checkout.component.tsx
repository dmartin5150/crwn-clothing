import React from 'react';
import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.styles";
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector';
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {

  const totalPrice = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        );
      })}
      <Total>Total:${totalPrice}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};
export default Checkout;
