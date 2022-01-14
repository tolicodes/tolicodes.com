import styled from "styled-components";

interface ISButton {
  color?: string;
  textColor?: string;
}

export const SButton = styled.button<ISButton>`
  padding: 13px 40px;
  background-color: ${(props) => (props.color ? props.color : "var(--ui-05)")};

  color: ${(props) => (props.textColor ? props.textColor : "var(--ui-01)")};

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;

  letter-spacing: 0.566726px;

  border: none;
`;
