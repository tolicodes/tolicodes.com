import styled from "styled-components";

export const SNavBar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0 2.5px;
      padding: 15px;
      background-color: var(--ui-05);

      a {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.435943px;

        text-decoration: none;

        color: var(--ui-04);
      }
    }
  }
`;
