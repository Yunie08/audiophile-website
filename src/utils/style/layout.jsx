import styled, { css } from "styled-components";
import { radiusCards } from "./variables";

export const LayoutContainer = styled.div`
  max-width: 1100px;
  width: 95%;
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
