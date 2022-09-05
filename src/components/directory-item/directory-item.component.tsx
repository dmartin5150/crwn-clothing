import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import React, { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
import { DirectoryCategory } from "../directory/directory.component";



type DirectoryItemProps = {
  category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
