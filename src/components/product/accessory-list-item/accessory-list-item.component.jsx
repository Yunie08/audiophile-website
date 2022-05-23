import React from "react";

import { Accessory, Quantity, Item } from "./accessory-list-item.styles";

const AccessoryListItem = ({ accessory }) => {
  const { quantity, item } = accessory;

  return (
    <Accessory>
      <Quantity>{`${quantity}x`}</Quantity>
      <Item>{item}</Item>
    </Accessory>
  );
};

export default AccessoryListItem;
