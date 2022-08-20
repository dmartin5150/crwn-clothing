import {createContext, useState, useEffect} from 'react';


import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: ()=>null
});


export const CategoriesProvider = ({children}) => {

  const [categoriesMap,setCategoriesMap] = useState([{}]);


  useEffect(() => {
    const getCategoriesMap = async () => {
      // console.log('in categories map')
      const categoryMap = await getCategoriesAndDocuments();
      // console.log('map', categoryMap);
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();

  },[]);



  const value = {categoriesMap,setCategoriesMap};

  return(<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)


}



