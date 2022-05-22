import DirectoryItem from "../directory-item/directory-item.component";
import { LayoutContainer } from "../../../utils/style/layout";
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "headphones",
    imageUrl:
      "https://i.ibb.co/DzSD662/image-category-thumbnail-headphones.png",
    route: "/shop/headphones",
  },
  {
    id: 2,
    title: "speakers",
    imageUrl: "https://i.ibb.co/FsNFLGJ/image-category-thumbnail-speakers.png",
    route: "/shop/speakers",
  },
  {
    id: 3,
    title: "earphones",
    imageUrl: "https://i.ibb.co/3msHJX5/image-category-thumbnail-earphones.png",
    route: "/shop/earphones",
  },
];

const Directory = ({ parent }) => {
  return (
    <LayoutContainer as="section">
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem
            key={category.id}
            category={category}
            parent={parent}
          />
        ))}
      </DirectoryContainer>
    </LayoutContainer>
  );
};

export default Directory;
