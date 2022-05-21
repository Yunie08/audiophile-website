import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  column-gap: 30px;

  @media ${device.tablet} {
    column-gap: 10px;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    row-gap: 100px;
  }
`;
