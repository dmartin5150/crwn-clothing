import {createContext, useState, useEffect} from 'react';


import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {}
});


export const CategoriesProvider = ({children}) => {

  const [categoriesMap,setCategoriesMap] = useState({});

  // console.log('in categories map')
  // console.log('cat map', categoriesMap)
  useEffect(() => {
    console.log('in User effect categories map')
    const getCategoriesMap = async () => {

      const categoryMap = await getCategoriesAndDocuments('categories');
      console.log('Created map', categoryMap);
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();

  },[]);

  useEffect(()=>{
    console.log("Categories Context updated Map: ", categoriesMap)
  },[categoriesMap])


  const value = {categoriesMap};

  return(<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)


}



