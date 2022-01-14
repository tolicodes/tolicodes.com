import styled from "styled-components";
import { CSSNavbarLinkBold } from "../../styles/fonts";

export const SNavBarLink = styled.li`
  margin: 0 2.5px;
  padding: 15px;
  background-color: var(--ui-05);

  a {
    ${CSSNavbarLinkBold};
    text-decoration: none;
    color: var(--ui-04);
  }
`;
