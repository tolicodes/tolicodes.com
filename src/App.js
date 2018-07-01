import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import autoBind from 'react-autobind';

import Header from './Header';

import ny from './assets/ny.jpg';
import sf from './assets/sf.jpg';
import hiking from './assets/hiking.jpg';

const Wrapper = styled.div`
  text-align: center;
  position: relative;

  ${({ menuOpen }) => css`
    margin-left: ${menuOpen ? '300px' : 0}
  `}
`;

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-family: 'Anton', sans-serif;
`;

const Slide = styled.div`
  width: 100%;
`;

const SlideImage = styled.img`
  width: 50%;
  height: auto;
`;

const Section = styled.section`
  padding-top: 5px;
`;

const MainSection = styled(Section)`
  background: #dddedd;
`

const AltSection = styled(Section)`
  margin-top: -5px;
  background: #f4f3f5;
  padding-bottom: 20px;
`;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };

    autoBind(this);
  }

  onMenuToggle(menuOpen) {
    this.setState({
      menuOpen,
    });
  }

  render() {
    const {
      menuOpen
    } = this.state;

    return (
      <Wrapper menuOpen={menuOpen}>
        <Header onMenuToggle={this.onMenuToggle}/>

        <MainSection>
          <Heading>NY -> SF Transplant</Heading>

          <Slide>
            <SlideImage src={ny}/>
            <SlideImage src={sf}/>
          </Slide>
        </MainSection>

        <AltSection>
          <Heading>Hobbies</Heading>
          <Slide>
            <SlideImage src={hiking} />
          </Slide>
        </AltSection>
      </Wrapper>
    );
  }
}
