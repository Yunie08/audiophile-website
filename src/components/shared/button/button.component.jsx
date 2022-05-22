import {
  BaseButton,
  DarkButton,
  InvertedButton,
  ArrowButton,
} from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  dark: "dark",
  inverted: "inverted",
  arrow: "arrow",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.dark]: DarkButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPES_CLASSES.arrow]: ArrowButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
