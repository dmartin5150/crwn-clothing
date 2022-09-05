import React, {FC} from 'react';
import {ProductCardContainer, Footer} from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';

import { CategoryItem } from '../../store/categories/category.types';

export type ProductCardProps = {
  product: CategoryItem
}



const  ProductCard: FC<ProductCardProps>  =  ({product}) => {
  const {name,price,imageUrl} = product;

  // const { addItemToCart} = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}/>
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>

  );
   
}
export default ProductCard;