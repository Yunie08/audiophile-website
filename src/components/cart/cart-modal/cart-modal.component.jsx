import React, { useContext, useEffect, useRef } from "react";
import ReactModal from "react-modal";
import useClickOutside from "../../../utils/hooks/use-click-location.hooks";

import { CartContext } from "../../../utils/contexts/cart.context";
import { LayoutContainer } from "../../../utils/style/layout";
import CartModalContent from "../cart-modal-content/cart-modal-content.component";

import "./cart-modal.styles.scss";

const mainElt = document.getElementsByClassName("#root");
ReactModal.setAppElement(mainElt);
// const mainElt = document.getElementsByClassName("main");
// ReactModal.setAppElement(mainElt);

const CartModal = () => {
  const { isCartOpen, toggleIsCartOpen, setIsCartOpen } =
    useContext(CartContext);
  const ref = React.createRef();
  const isClickedOutside = useClickOutside(isCartOpen, ref);
  // // Close drowpdown menu on click outside of header
  useEffect(() => {
    isClickedOutside && setIsCartOpen(false);
  }, [isClickedOutside, isCartOpen]);

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
        <CartModalContent ref={ref} />
      </ReactModal>
    </LayoutContainer>
  );
};

export default CartModal;
