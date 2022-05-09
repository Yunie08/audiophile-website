import styled from "styled-components";
import colors from "../../../utils/style/colors";

export const BaseButton = styled.button`
  font-family: inherit;
  min-width: 16rem;
  width: auto;
  height: 4.8rem;
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.light};
  background: ${colors.primary};
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin: 2.8rem 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.primaryHover};
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    ::after {
      transition: opacity ease-out 150ms;
      opacity: 1;
    }
  }
`;

export const InvertedButton = styled(BaseButton)`
  color: ${colors.dark};
  background: ${colors.light};
  border: 1px solid ${colors.dark};

  &::after {
    background-color: ${colors.dark};
  }

  &:hover {
    color: ${colors.light};
    transition: color ease-out 150ms;

    ::after {
      opacity: 1;
    }
  }
`;

export const ArrowButton = styled(BaseButton)`
  color: #808080;
  background: transparent;
  min-width: auto;
  padding: 0 13px 0 0;

  &::after {
    font-family: "Font Awesome 6 Free";
    content: "\f054";
    color: ${colors.primary};
    background-color: transparent;
    opacity: 1;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
    left: auto;
  }

  &:hover {
    color: ${colors.primary};

    &::after {
      transition: opacity ease-out 150ms;
    }
  }
`;
