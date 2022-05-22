import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

import { CategoryContainer, ImageContainer } from "./directory-item.styles";

const DirectoryItem = ({ category, parent }) => {
  const navigate = useNavigate();
  const { title, imageUrl, route } = category;
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryContainer parent={parent}>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
      <h2>{title}</h2>
      <Button onClick={onNavigateHandler} buttonType="arrow">
        Shop
      </Button>
    </CategoryContainer>
  );
};

export default DirectoryItem;
