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
    color: ${colors.primary};
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
`;

export const MainCta = styled(BaseCta)`
  span {
    ${h1Style};
    color: ${colors.light};
  }
  p {
    color: ${colors.light};
    opacity: 0.75;
  }
`;

export const MinimalCta = styled(BaseCta)`
  span {
    ${h4Style};
    margin: 0.7rem 0;
  }
`;
