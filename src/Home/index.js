import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { bindActionCreators } from 'redux';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import WatchMyStory from './components/WatchMyStory';
import NYSFTransplant from './components/NYSFTransplant';
import Hobbies from './components/Hobbies';
import Clients from './components/Clients';

import {
  filterClients,
} from './actions';

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  font-size: 14px;

  transition: .5s ease-in;

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

  getNavPropsForSection(section) {
    const { nav } = this.props;

    if (!nav) return { title: 'Loading...' };

    return find(nav, { path: section }) || {};
  }

  render() {
    const {
      menuOpen,
    } = this.state;

    const {
      homeText,
      clients,
      nav,
      
      clientFilters,

      filterClients,
    } = this.props;

    const {
      aboutMe,
    } = homeText || {};

    return (
      <Wrapper menuOpen={menuOpen}>
        <Header onMenuToggle={this.onMenuToggle} nav={nav} />
        <WatchMyStory {...this.getNavPropsForSection('my-story')} />
        <AboutMe text={aboutMe} {...this.getNavPropsForSection('about-me')} />
        <Clients
          clients={clients}
          filterClients={filterClients}
          clientFilters={clientFilters}
          {...this.getNavPropsForSection('clients')}
        />
        <NYSFTransplant {...this.getNavPropsForSection('ny-to-sf')} />
        <Hobbies {...this.getNavPropsForSection('hobbies')} />
      </Wrapper>
    );
  }
}

export default connect(
  ({ home: {
    homeText,
    clients,
    nav,
    clientFilters,
  }}) => ({
    homeText,
    clients,
    nav,
    clientFilters,
  }),
  dispatch => bindActionCreators({
    filterClients,
  }, dispatch),
)(Home);
