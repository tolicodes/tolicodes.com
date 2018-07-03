import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import WatchMyStory from './components/WatchMyStory';
import NYSFTransplant from './components/NYSFTransplant';
import Hobbies from './components/Hobbies';

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  font-size: 14px;

  ${({ menuOpen }) => css`
    margin-left: ${menuOpen ? '300px' : 0};
  `}
`;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
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
      menuOpen,
    } = this.state;

    const {
      homeText,
    } = this.props;

    const {
      aboutMe,
    } = homeText || {};

    return (
      <Wrapper menuOpen={menuOpen}>
        <Header onMenuToggle={this.onMenuToggle} />
        <WatchMyStory/>
        <AboutMe text={aboutMe}/>
        <NYSFTransplant/>
        <Hobbies/>
      </Wrapper>
    );
  }
}

export default connect(
  ({ home: { homeText }}) => ({ homeText }),
)(Home);
