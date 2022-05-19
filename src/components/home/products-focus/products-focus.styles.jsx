import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";

export const ProductsFocusContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;
