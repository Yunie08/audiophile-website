import styled from "styled-components";
import colors from "../../../utils/style/colors";

import { h6Style } from "../../../utils/style/typography";
import { radiusCards } from "../../../utils/style/variables";
import { device } from "../../../utils/style/breakpoints";

import {
  Total,
  TotalPrice,
} from "../../cart/cart-modal-content/cart-modal-content.styles";

const cardPadding = {
  desktop: "33px",
  mobile: "33px 24px",
};

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  border-radius: ${radiusCards};
  background-color: ${colors.light};
  padding: ${cardPadding.desktop};
  height: fit-content;

  @media ${device.mobileL} {
    padding: ${cardPadding.mobile};
  }
`;

export const Title = styled.h2`
  margin: 0;
  ${h6Style}
`;

export const SubTotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const SubTotalName = styled(Total)``;

export const SubTotalAmount = styled(TotalPrice)`
  &::before {
    position: absolute;
    content: "$";
    left: -20px;
  }
`;
export const GrandTotalAmount = styled(SubTotalAmount)`
  color: ${colors.primary};
`;
