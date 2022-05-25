import React, { useContext } from "react";
import ReactModal from "react-modal";

import { CartContext } from "../../../utils/contexts/cart.context";
import { LayoutContainer } from "../../../utils/style/layout";
import CartModalContent from "../cart-modal-content/cart-modal-content.component";

import "./cart-modal.styles.scss";

const mainElt = document.getElementsByClassName("#root");
ReactModal.setAppElement(mainElt);
// const mainElt = document.getElementsByClassName("main");
// ReactModal.setAppElement(mainElt);

const CartModal = () => {
  const { isCartOpen, toggleIsCartOpen } = useContext(CartContext);
  return (
    <LayoutContainer>
      <ReactModal
        className="cart-modal"
        overlayClassName="cart-modal-overlay"
        isOpen={isCartOpen}
        contentLabel="shopping cart"
        onRequestClose={toggleIsCartOpen}
        shouldCloseOnOverlayClick={true}
      >
        <CartModalContent />
      </ReactModal>
    </LayoutContainer>
  );
};

export default CartModal;
