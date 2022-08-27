import {CategoryTitle, CategoryContainer} from  "./category.styles.jsx";

import ProductCard from "../../components/product-card/product-card.component";
import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { category } = useParams();
  console.log('rendering/re-rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    console.log('Effect fired calling setProducts')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
