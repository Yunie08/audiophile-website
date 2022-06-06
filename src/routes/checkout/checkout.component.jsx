import React from "react";

import { LayoutContainer } from "../../utils/style/layout";
import GoBackButton from "../../components/shared/go-back-button/go-back-button.component";
import CheckoutForm from "../../components/checkout/checkout-form/checkout-form.component";

import { CheckoutMain } from "./checkout.styles";

const Checkout = () => {
  return (
    <CheckoutMain className="main">
      <LayoutContainer>
        <GoBackButton />
        <CheckoutForm />
      </LayoutContainer>
      <CheckoutForm />
    </CheckoutMain>
  );
};

export default Checkout;
