import { useContext } from "react";

import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";

import { GalleryLayout } from "./image-gallery.styles";

const ImageGallery = () => {
  const {
    currentProduct: { gallery, name },
  } = useContext(CurrentProductContext);

  const { first, second, third } = gallery;

  return (
    <GalleryLayout>
      <picture>
        <source media="(max-width: 500px)" srcSet={first.mobile} />
        <source media="(max-width: 990px)" srcSet={first.tablet} />
        <source media="(min-width: 991px)" srcSet={first.desktop} />
        <img src={first.tablet} alt={name} />
      </picture>
      <picture>
        <source media="(max-width: 500px)" srcSet={second.mobile} />
        <source media="(max-width: 990px)" srcSet={second.tablet} />
        <source media="(min-width: 991px)" srcSet={second.desktop} />
        <img src={second.tablet} alt={name} />
      </picture>
      <picture>
        <source media="(max-width: 500px)" srcSet={third.mobile} />
        <source media="(max-width: 990px)" srcSet={third.tablet} />
        <source media="(min-width: 991px)" srcSet={third.desktop} />
        <img src={third.tablet} alt={name} />
      </picture>
    </GalleryLayout>
  );
};

export default ImageGallery;
