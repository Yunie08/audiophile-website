import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import { orderSchema } from "../../../utils/validation/order.schema";

import { LayoutContainer } from "../../../utils/style/layout";
import Summary from "../summary/summary.component";
import "./checkout-form.styles";

import { COUNTRY_LIST } from "../../../utils/validation/countryList";

// styled components
import {
  h3Style,
  subTitleStyle,
  labelStyle,
} from "../../../utils/style/typography";
import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { errorMessage } from "../../../utils/validation/errorMessage";

export const Title = styled.h1`
  ${h3Style}
  color: ${colors.dark};
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
`;
export const StyledForm = styled(Form)`
  background-color: ${colors.light};
  padding: 48px;
  border-radius: ${radiusCards};
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0 0 53px 0;
  padding: 0;
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
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Label = styled.label`
  ${labelStyle}
  color: ${(props) => (props.error ? `${colors.error}` : `${colors.dark}`)};
  margin-bottom: 9px;
`;
export const StyledField = styled(Field)`
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

export const StyledSelectField = styled(StyledField)`
  appearance: none;
`;

export const ErrorContainer = styled.span`
  ${labelStyle};
  position: absolute;
  top: 0px;
  right: 0px;
  color: #cd2c2c;
  font-weight: normal;
`;

const CheckoutForm = (children) => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
      }}
      validationSchema={orderSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, touched, errors }) => (
        <FormContainer>
          <StyledForm>
            <Title>Checkout</Title>

            {/* Billing details */}
            <Fieldset>
              <Legend>Billing details</Legend>
              <FieldsetLayout>
                <InputContainer>
                  <Label
                    htmlFor="firstname"
                    error={touched.firstname && errors.firstname}
                  >
                    Firstname
                  </Label>
                  <StyledField
                    name="firstname"
                    type="text"
                    error={touched.firstname && errors.firstname}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="firstname" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label
                    htmlFor="lastname"
                    error={touched.lastname && errors.lastname}
                  >
                    Lastname
                  </Label>
                  <StyledField
                    name="lastname"
                    type="text"
                    error={touched.lastname && errors.lastname}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="lastname" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="email" error={touched.email && errors.email}>
                    Email address
                  </Label>
                  <StyledField
                    name="email"
                    type="text"
                    error={touched.email && errors.email}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="email" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="phone" error={touched.phone && errors.phone}>
                    Phone number
                  </Label>
                  <StyledField
                    name="phone"
                    type="text"
                    error={touched.phone && errors.phone}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="phone" />
                  </ErrorContainer>
                </InputContainer>
              </FieldsetLayout>
            </Fieldset>

            {/* Shipping info */}
            <Fieldset>
              <Legend>Shipping info</Legend>
              <FieldsetLayout>
                <InputContainer style={{ gridColumn: "1 / 3" }}>
                  <Label
                    htmlFor="address"
                    error={touched.address && errors.address}
                  >
                    Address
                  </Label>
                  <StyledField
                    name="address"
                    type="text"
                    error={touched.address && errors.address}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="address" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label
                    htmlFor="zipCode"
                    error={touched.zipCode && errors.zipCode}
                  >
                    Zip code
                  </Label>
                  <StyledField
                    name="zipCode"
                    type="text"
                    error={touched.zipCode && errors.zipCode}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="zipCode" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="city" error={touched.city && errors.city}>
                    City
                  </Label>
                  <StyledField
                    name="city"
                    type="text"
                    error={touched.city && errors.city}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="city" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label
                    htmlFor="country"
                    error={touched.country && errors.country}
                  >
                    Country
                  </Label>
                  <StyledSelectField
                    name="country"
                    as="select"
                    error={touched.country && errors.country}
                  >
                    <option value="">Choose a country</option>
                    {COUNTRY_LIST.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </StyledSelectField>
                  <ErrorContainer>
                    <ErrorMessage name="country" />
                  </ErrorContainer>
                </InputContainer>
              </FieldsetLayout>
            </Fieldset>

            {/* Payment details */}
            <Fieldset>
              <Legend>Payment details</Legend>
              <div id="payment-choice">Payment method</div>
              <div role="group" aria-labelledby="payment-choice">
                <Label>
                  <StyledField type="radio" name="payment" value="card" />
                  Credit / Debit card
                </Label>
                <Label>
                  <StyledField type="radio" name="payment" value="emoney" />
                  e-Money
                </Label>
                <div>Picked: {values.payment}</div>
              </div>
            </Fieldset>
          </StyledForm>
          <Summary />
        </FormContainer>
      )}
    </Formik>
  );
};

export default CheckoutForm;
