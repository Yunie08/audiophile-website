import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBackButtonStyled } from "./go-back-button.styles";

const GoBackButton = () => {
  const navigate = useNavigate();
  const goBackHandler = () => navigate(-1);
  return (
    <GoBackButtonStyled onClick={goBackHandler}>go back</GoBackButtonStyled>
  );
};

export default GoBackButton;
