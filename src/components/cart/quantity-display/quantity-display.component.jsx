import React from "react";

import { ProductQuantity } from "./quantity-display.styles";

const QuantityDisplay = ({ quantityToAdd }) => {
  return <ProductQuantity>{quantityToAdd}</ProductQuantity>;
};

export default QuantityDisplay;
