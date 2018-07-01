import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #006978;
  width: 300px;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  z-index: 1;
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>

      </Wrapper>
    );
  }
}
