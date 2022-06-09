import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled, { css } from "styled-components";

import { orderSchema } from "../../../utils/validation/order.schema";

import { LayoutContainer } from "../../../utils/style/layout";
import Summary from "../summary/summary.component";
import "./checkout-form.styles";

import { COUNTRY_LIST } from "../../../utils/validation/countryList";

import { ReactComponent as CashOnDeliveryIcon } from "../../../static/images/checkout/icon-cash-on-delivery.svg";

// Style
import {
  Title,
  FormContainer,
  StyledForm,
  Fieldset,
  Legend,
  FieldsetLayout,
  InputContainer,
  Label,
  StyledField,
  StyledSelectField,
  ErrorContainer,
  PaymentLabel,
  PaymentOptions,
  PaymentOption,
  PaymentInfos,
} from "./checkout-form.styles";

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
      {({ values, touched, errors, handleChange }) => (
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
                    onChange={handleChange}
                    value={values.country}
                  >
                    <option value="" disabled>
                      Choose a country
                    </option>
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
            <Fieldset type="payment">
              <Legend>Payment details</Legend>
              <PaymentLabel id="payment-choice">Payment method</PaymentLabel>
              <PaymentOptions role="group" aria-labelledby="payment-choice">
                <PaymentOption checked={values.payment === "card"}>
                  <Field type="radio" name="payment" value="card" id="card" />
                  <Label htmlFor="card">Credit / Debit card</Label>
                </PaymentOption>
                <PaymentOption checked={values.payment === "emoney"}>
                  <Field
                    type="radio"
                    name="payment"
                    value="emoney"
                    id="emoney"
                  />
                  <Label htmlFor="emoney" tabindex="0">
                    e-Money
                  </Label>
                </PaymentOption>
                <PaymentOption checked={values.payment === "cashOnDelivery"}>
                  <Field
                    type="radio"
                    name="payment"
                    value="cashOnDelivery"
                    id="cashOnDelivery"
                  />
                  <Label htmlFor="cashOnDelivery" tabindex="0">
                    Cash on Delivery
                  </Label>
                </PaymentOption>
              </PaymentOptions>
            </Fieldset>
            {values.payment === "emoney" && (
              <FieldsetLayout>
                <InputContainer>
                  <Label
                    htmlFor="emoneyNumber"
                    error={touched.emoneyNumber && errors.emoneyNumber}
                  >
                    e-Money Number
                  </Label>
                  <StyledField
                    name="emoneyNumber"
                    type="number"
                    error={touched.emoneyNumber && errors.emoneyNumber}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="emoneyNumber" />
                  </ErrorContainer>
                </InputContainer>
                <InputContainer>
                  <Label
                    htmlFor="emoneyPin"
                    error={touched.emoneyPin && errors.emoneyPin}
                  >
                    e-Money PIN
                  </Label>
                  <StyledField
                    name="emoneyPin"
                    type="number"
                    error={touched.emoneyPin && errors.emoneyPin}
                  />
                  <ErrorContainer>
                    <ErrorMessage name="emoneyPin" />
                  </ErrorContainer>
                </InputContainer>
              </FieldsetLayout>
            )}
            {values.payment === "cashOnDelivery" && (
              <PaymentInfos>
                <CashOnDeliveryIcon />
                <p>
                  The 'Cash on Delivery' option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </PaymentInfos>
            )}
          </StyledForm>
          <Summary />
        </FormContainer>
      )}
    </Formik>
  );
};

export default CheckoutForm;
