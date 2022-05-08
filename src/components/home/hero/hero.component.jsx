// TODO: Link see product button to product page

import { LayoutContainer, Section } from "../../../utils/style/layout";
import { HeroSection, ImageContainer, TextContainer } from "./hero.styles";
import Button from "../../shared/button/button.component";

const Hero = () => {
  return (
    <HeroSection>
      <ImageContainer>
        <LayoutContainer>
          <TextContainer>
            <span>New product</span>
            <p>
              XX99 MARK II <br />
              headphones
            </p>
            <h1>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </h1>
            <Button>See product</Button>
          </TextContainer>
        </LayoutContainer>
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;
