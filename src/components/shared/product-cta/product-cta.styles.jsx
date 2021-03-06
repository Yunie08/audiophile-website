import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { device } from "../../../utils/style/breakpoints";
import {
  overlineStyle,
  h1Style,
  h2Style,
  h4Style,
} from "../../../utils/style/typography";

export const BaseCta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  div {
    ${overlineStyle};
    margin: 0;
  }

  span {
    ${h2Style};
    margin: 1.6rem 0;
  }

  p {
    color: ${colors.dark};
    opacity: 0.5;
  }

  @media ${device.tablet} {
    align-items: center;
    text-align: center;
  }
`;

export const HeroCta = styled(BaseCta)`
  div {
    color: ${colors.light};
    opacity: 0.5;
  }

  span {
    ${h1Style};
    color: ${colors.light};
    margin: 2.4rem 0;
  }

  h1 {
    margin: 0 0 1rem 0;
    color: ${colors.light};
    opacity: 0.75;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media ${device.tablet} {
    max-width: 380px;
  }
  @media ${device.mobileL} {
    max-width: 328px;
  }
`;

export const MainCta = styled(BaseCta)`
  span {
    ${h1Style};
    color: ${colors.light};

    @media ${device.tablet} {
      margin: 0 0 24px 0;
    }

    @media ${device.mobileL} {
      max-width: 250px;
    }
  }

  p {
    color: ${colors.light};
    opacity: 0.75;

    @media ${device.mobileL} {
      margin: 0;
    }
  }
`;

export const MinimalCta = styled(BaseCta)`
  @media ${device.tablet} {
    text-align: start;
    align-items: flex-start;
  }

  span {
    ${h4Style};
    margin: 0.7rem 0;
  }

  button {
    @media ${device.tablet} {
      margin-bottom: 0;
    }
  }
`;
