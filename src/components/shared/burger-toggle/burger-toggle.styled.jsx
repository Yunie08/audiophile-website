import styled from "styled-components";

import { srOnly } from "../../../utils/style/accessibility";

export const Button = styled.button`
  background: none;
  padding: 0px;
`;

export const Label = styled.span`
  ${srOnly}
`;
