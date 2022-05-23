import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { device } from "../../../utils/style/breakpoints";
import {
  overlineStyle,
  h1Style,
  h2Style,
  h4Style,
  h6Style,
} from "../../../utils/style/typography";

export const OverviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 32px;
  padding-left: 95px;

  > * {
    margin: 0;
  }

  h1 {
    ${h2Style};
  }

  p {
    color: ${colors.dark};
    opacity: 0.5;
  }

  span {
    ${h6Style};
  }

  @media ${device.tablet} {
    padding: 0;
  }
  @media ${device.mobileL} {
    row-gap: 24px;
  }
`;

export const NewProduct = styled.div`
  ${overlineStyle}
  margin-bottom: -16px;

  @media ${device.mobileL} {
    margin-bottom: 0px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  column-gap: 16px;
  margin-top: 15px;

  button {
    margin: 0;
  }

  @media ${device.tablet} {
    margin-top: 0;
  }
  @media ${device.mobileL} {
    margin-top: 7;
  }
`;
