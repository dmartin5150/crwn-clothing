import {DirectoryContainer} from './directory.styles'
import CategoryItem from '../directory-item/directory-item.component';

const Directory = ({categories}) => {
  return(
    <DirectoryContainer>
    {categories.map((category) =>{
      return (
        <CategoryItem key={category.id} category={category} />
    )})}
  </DirectoryContainer>
  );
}

export default Directory;