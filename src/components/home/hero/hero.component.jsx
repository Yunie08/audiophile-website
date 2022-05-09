// TODO: Link see product button to product page

import { LayoutContainer, Section } from "../../../utils/style/layout";
import {
  HeroSection,
  ImageContainer,
  TextContainer,
  NewProductOverline,
  ProductName,
  ProductDescription,
} from "./hero.styles";
import Button from "../../shared/button/button.component";

const Hero = () => {
  return (
    <HeroSection>
      <ImageContainer>
        <LayoutContainer>
          <TextContainer>
            <NewProductOverline>New product</NewProductOverline>
            <ProductName>XX99 MARK II headphones</ProductName>
            <ProductDescription>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </ProductDescription>
            <Button>See product</Button>
          </TextContainer>
        </LayoutContainer>
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;
