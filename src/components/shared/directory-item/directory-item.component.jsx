import Button from "../button/button.component";

import { CategoryContainer, ImageContainer } from "./directory-item.styles";

const DirectoryItem = ({ category, parent }) => {
  const { title, imageUrl, route } = category;
  return (
    <CategoryContainer parent={parent}>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
      <h2>{title}</h2>
      <Button buttonType="arrow">Shop</Button>
    </CategoryContainer>
  );
};

export default DirectoryItem;
