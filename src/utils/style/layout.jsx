import styled, { css } from "styled-components";
import { radiusCards } from "./variables";
import { device } from "./breakpoints";

export const LayoutContainer = styled.div`
  max-width: 1110px;
  width: 95%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 89.7%;
  }
  @media ${device.mobileL} {
    width: 87.2%;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const cardBaseStyle = css`
  border-radius: ${radiusCards};
  padding: 0 95px;
  display: flex;
  align-items: center;
`;
