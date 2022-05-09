import styled from "styled-components";

import { Section } from "../../../utils/style/layout";

import colors from "../../../utils/style/colors";

import { device } from "../../../utils/style/breakpoints";

import { overlineStyle, h1Style } from "../../../utils/style/typography";

export const HeroSection = styled(Section)`
  height: 730px;
`;

export const ImageContainer = styled.div`
  height: 100%;

  padding-top: 9.6rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://i.ibb.co/G0LR9nh/image-hero.jpg");

  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  height: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const NewProductOverline = styled.span`
  ${overlineStyle};
  color: ${colors.light};
  opacity: 0.5;
  margin-bottom: 1.2rem;
`;

export const ProductName = styled.p`
  ${h1Style};
  color: ${colors.light};
  margin: 1.2rem 0;
`;

export const ProductDescription = styled.h1`
  max-width: 350px;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin: 1.2rem 0;
  color: ${colors.light};
  opacity: 0.75;
`;
