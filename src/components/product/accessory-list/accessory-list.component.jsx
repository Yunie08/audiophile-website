import { useContext } from "react";

import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";

import AccessoryListItem from "../accessory-list-item/accessory-list-item.component";

import { ItemList } from "./accessory-list.styles";

const AccessoryList = () => {
  const {
    currentProduct: { includes },
  } = useContext(CurrentProductContext);
  return (
    <ItemList>
      {includes.map((accessory) => (
        <AccessoryListItem key={accessory.item} accessory={accessory} />
      ))}
    </ItemList>
  );
};

export default AccessoryList;
