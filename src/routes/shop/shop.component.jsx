import {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {useDispatch} from 'react-redux';
import { setCategories } from '../../store/categories/category.action';


const Shop = () => {

  const dispatch = useDispatch();
  console.log('in shop')
  useEffect(() => {
    console.log('in shop use effect')
    const getCategoriesMap = async () => {

      const categoriesArray = await getCategoriesAndDocuments('categories');
      console.log('categories array', categoriesArray)
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();

  },[]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
