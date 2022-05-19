import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";

export const DirectoryContainer = styled.div`
  width: 100%;
  height: 572px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  align-items: center;

  @media ${device.tablet} {
    height: auto;
    margin: 96px 0;
    column-gap: 10px;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    row-gap: 100px;
    margin: 92px 0 120px 0;
  }
`;
