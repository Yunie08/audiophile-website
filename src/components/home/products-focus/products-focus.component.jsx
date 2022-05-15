import { LayoutContainer } from "../../../utils/style/layout";
import { ProductsFocusContainer } from "./products-focus.styles";
import ProductFocusLarge from "../product-focus-large/product-focus-large.component";
import ProductFocusMedium from "../product-focus-medium/product-focus-medium.component";
import ProductFocusSplit from "../product-focus-split/product-focus-split.component";

const productsFocused = {
  zx9speaker: {
    name: "ZX9 Speaker",
    imageUrl: {
      desktop: "https://i.ibb.co/p1gHMdV/image-speaker-zx9.png",
      tablet: "https://i.ibb.co/3WLBDDT/image-speaker-zx9.png",
      mobile: "https://i.ibb.co/TKpxFBR/image-speaker-zx9.png",
    },
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    route: 'shop/speakers/"zx9-speaker"',
  },
  zx7speaker: {
    name: "ZX7 Speaker",
    imageUrl: {
      desktop: "https://i.ibb.co/mcMcxDm/image-speaker-zx7.jpg",
      tablet: "https://i.ibb.co/6w8Cxzk/image-speaker-zx7.jpg",
      mobile: "https://i.ibb.co/19MxNn0/image-speaker-zx7.jpg",
      route: 'shop/speakers/"zx7-speaker"',
    },
  },
  yx1earphones: {
    name: "YX1 Earphones",
    imageUrl: {
      desktop: "https://i.ibb.co/SKFhffZ/image-earphones-yx1.jpg",
      tablet: "https://i.ibb.co/S0cCP60/image-earphones-yx1.jpg",
      mobile: "https://i.ibb.co/vdnmgYD/image-earphones-yx1.jpg",
      route: 'shop/earphones/"yx1-earphones',
    },
  },
};

const ProductsFocus = () => {
  return (
    <LayoutContainer as="section">
      <ProductsFocusContainer>
        <ProductFocusLarge product={productsFocused.zx9speaker} />
        <ProductFocusMedium product={productsFocused.zx7speaker} />
        <ProductFocusSplit product={productsFocused.yx1earphones} />
      </ProductsFocusContainer>
    </LayoutContainer>
  );
};

export default ProductsFocus;
