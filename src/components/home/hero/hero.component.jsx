// TODO: Link see product button to product page

import { LayoutContainer } from "../../../utils/style/layout";
import { HeroSection, ImageContainer, TextContainer } from "./hero.styles";
import ProductCta from "../../shared/product-cta/product-cta.component";

const heroProduct = {
  isNew: true,
  name: "XX99 Mark II Headphones",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  route: "shop/headphones/xx99-mark-two-headphones",
};

const Hero = () => {
  return (
    <HeroSection>
      <ImageContainer>
        <LayoutContainer>
          <TextContainer>
            <ProductCta
              product={heroProduct}
              ctaType="hero"
              buttonType="base"
            />
          </TextContainer>
        </LayoutContainer>
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;
