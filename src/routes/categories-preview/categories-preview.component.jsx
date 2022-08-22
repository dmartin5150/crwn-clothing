
import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
           
    const {categoriesMap} = useContext(CategoriesContext);
  
    console.log(' Categories preview Map:', categoriesMap);
    return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          // console.log('products ', products);
          return <CategoryPreview  key={title} title={title} products={products}/>
      })}
      </Fragment>
    );
  };
  
export default CategoriesPreview;