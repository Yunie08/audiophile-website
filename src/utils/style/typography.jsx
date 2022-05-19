import styled, { css } from "styled-components";
import colors from "./colors";
import { device } from "./breakpoints";

export const titleStyle = css`
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.dark};
`;

export const h1Style = css`
  font-size: 5.6rem;
  line-height: 5.8rem;
  letter-spacing: 0.2rem;
  ${titleStyle}

  @media ${device.mobileL} {
    font-size: 3.6rem;
    line-height: 4rem;
    letter-spacing: 0.129rem;
  }
`;

export const h2Style = css`
  font-size: 4rem;
  line-height: 4.4rem;
  letter-spacing: 0.15rem;
  ${titleStyle}

  @media ${device.mobileL} {
    font-size: 2.8rem;
    line-height: 3.825rem;
    letter-spacing: 0.1rem;
  }
`;

export const h3Style = css`
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: 0.115rem;
  ${titleStyle}

  @media ${device.mobileL} {
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: 0.086rem;
  }
`;

export const h4Style = css`
  font-size: 2.8rem;
  line-height: 3.78rem;
  letter-spacing: 0.2rem;
  ${titleStyle};
`;

export const h5Style = css`
  font-size: 2.4rem;
  line-height: 3.278rem;
  letter-spacing: 0.171rem;
  ${titleStyle}
`;

export const h6Style = css`
  font-size: 1.8rem;
  line-height: 2.459rem;
  letter-spacing: 0.129rem;
  ${titleStyle};

  @media ${device.tablet} {
    font-size: 1.5rem;
    line-height: 2.049rem;
    letter-spacing: 0.107rem;
  }
`;

export const overlineStyle = css`
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 1rem;
  color: ${colors.primary};
  text-transform: uppercase;
`;

export const subTitleStyle = css`
  font-size: 1.3rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  ${colors.primary};
  ${titleStyle}
`;
