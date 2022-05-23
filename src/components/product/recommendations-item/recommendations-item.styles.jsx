import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import { h5Style } from "../../../utils/style/typography";

export const RecommendationItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;

  > * {
    margin: 0px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 8px;

    @media ${device.mobileL} {
      margin-bottom: 0;
    }
  }
`;

export const ProductName = styled.h3`
  ${h5Style};
`;
