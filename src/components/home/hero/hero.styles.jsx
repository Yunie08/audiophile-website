import styled from "styled-components";

import { Section } from "../../../utils/style/layout";

export const HeroSection = styled(Section)`
  height: 100vh;
  max-height: 730px;
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
  max-width: 40rem;
`;
