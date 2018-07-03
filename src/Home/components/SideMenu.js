import React, { Component } from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

import {
  Youtube,
} from 'styled-icons/fa-brands';

import {
  QuestionCircle,
} from 'styled-icons/fa-regular';

import {
  LocationCity,
} from 'styled-icons/material';

import {
  BasketballBall
} from 'styled-icons/fa-solid';


const Wrapper = styled.div`
  background: #006978;
  width: 280px;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  z-index: 1;

  padding: 10px;
`;

const SidebarLink = styled(Scrollchor)`
  display: flex;
  height: 50px;

  color: black;
  background-color: #db573e;
  text-decoration: none;

  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  border-radius: 2px;

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

  &:hover {
    box-shadow: none;
  }
`;

const NavLabel = styled.span`
  margin-left: 5px;
`;

const ICON_SIZE = 14;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <SidebarLink to='my-story'>
          <Youtube size={ICON_SIZE}/>
          <NavLabel>
            Watch My Story
          </NavLabel>
        </SidebarLink>

        <SidebarLink to='about-me'>
          <QuestionCircle size={ICON_SIZE}/>
          <NavLabel>
            About Me
          </NavLabel>
        </SidebarLink>

        <SidebarLink to='ny-to-sf'>
          <LocationCity size={ICON_SIZE}/>
          <NavLabel>
            NY->SF Transplant
          </NavLabel>
        </SidebarLink>

        <SidebarLink to='hobbies'>
          <BasketballBall size={ICON_SIZE}/>
          <NavLabel>
            Hobbies
          </NavLabel>
        </SidebarLink>
      </Wrapper>
    );
  }
}
