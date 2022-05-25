import styled from "styled-components";
import colors from "../../../utils/style/colors";

export const BaseButton = styled.button`
  font-family: inherit;
  min-width: 16rem;
  width: auto;
  height: 4.8rem;
  padding: 1.5rem 3rem;
  margin: 2.5rem 0;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.light};
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  cursor: pointer;
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
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

export const DarkButton = styled(BaseButton)`
  color: ${colors.light};
  background: ${colors.dark};
  border: 1px solid ${colors.dark};

  &::after {
    background-color: #4c4c4c;
  }
`;

export const InvertedButton = styled(BaseButton)`
  color: ${colors.dark};
  background: transparent;
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
  border: none;

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
