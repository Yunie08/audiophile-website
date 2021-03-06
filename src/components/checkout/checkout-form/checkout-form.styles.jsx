import styled, { css } from "styled-components";
import { Form, Field } from "formik";

import {
  h3Style,
  subTitleStyle,
  labelStyle,
} from "../../../utils/style/typography";
import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { device } from "../../../utils/style/breakpoints";

export const Title = styled.h1`
  ${h3Style}
  color: ${colors.dark};
  margin: 0 0 41px 0;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
  row-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyledForm = styled(Form)`
  background-color: ${colors.light};
  padding: 48px;
  border-radius: ${radiusCards};

  @media ${device.mobileL} {
    padding: 24px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0 0 53px 0;
  padding: 0;

  display: ${(props) => props.type === "payment" && "grid"};
  grid-template-columns: ${(props) =>
    props.type === "payment" && "repeat(2, 1fr)"};
  column-gap: ${(props) => props.type === "payment" && "16px"};

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const Legend = styled.legend`
  ${subTitleStyle}
  color: ${colors.primary};
  margin-bottom: 16px;
`;

export const FieldsetLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 24px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  grid-column: ${(props) => props.type === "address" && "1 / 3"};

  @media ${device.mobileL} {
    grid-column: ${(props) => props.type === "address" && "1 / 2"};
  }
`;

export const Label = styled.label`
  ${labelStyle}
  color: ${(props) => (props.error ? `${colors.error}` : `${colors.dark}`)};
  margin-bottom: 9px;
`;

const InputStyling = css`
  height: 56px;
  border: 1px solid #cfcfcf;
  border-radius: ${radiusCards};
  padding: 0 24px;
  caret-color: ${colors.primary};
  font-weight: bold;
  font-size: 1.4rem;
  outline: ${(props) => props.error && `${colors.error} 2px solid`};
  border-color: ${(props) => props.error && "transparent"};

  &:focus,
  &:active {
    border-color: transparent;
    outline: ${(props) =>
      props.error
        ? `${colors.error} 2px solid`
        : `${colors.primary} 1px solid`};
  }
`;

export const StyledField = styled(Field)`
  ${InputStyling}

  &[type="radio"] {
    appearance: none;
  }
`;

export const StyledSelectField = styled.select`
  ${InputStyling}
  width: 100%;
`;

export const ErrorContainer = styled.span`
  ${labelStyle};
  position: absolute;
  top: 0px;
  right: 0px;
  color: #cd2c2c;
  font-weight: normal;
`;

export const PaymentLabel = styled.div`
  ${labelStyle}
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const PaymentOption = styled.div`
  ${InputStyling}

  display: flex;
  align-items: center;

  border-color: ${(props) => props.checked && `${colors.primary}`};

  label {
    margin: 0;
    padding-left: 16px;
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
  }

  input {
    margin: 0;
    appearance: none;
    font: inherit;
    color: currentColor;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #cfcfcf;
    border-radius: 50%;
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 50%;
      height: 50%;
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      /* transition: 50ms transform ease-in-out; */
      box-shadow: inset 1em 1em ${colors.primary};
    }
    &:checked::before {
      transform: scale(1);
    }
  }
`;

export const PaymentInfos = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  column-gap: 32px;
  align-items: center;
  margin p {
    margin: 0;
  }
`;
