import React, { Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';

import {
  FileDownload,
  Email,
  Menu,
} from 'styled-icons/material';

import {
  Github,
  Linkedin
} from 'styled-icons/fa-brands';

import SideMenu from './SideMenu';

const MOBILE_BREAKPOINT = 768;
const ICON_SIZE = 13

const Wrapper = styled.header`
  padding: 20px 0;
  background-color: #db573e;
`;

const MenuButton = styled(Menu)`
  cursor: pointer;
  position: absolute;
  left: 15px;
  color: #006978;
`;

const Title = styled.h1`
  font-family: 'Wendy One', sans-serif;
  margin: 0;
  font-size: 40px;
`;

const Subtitle = styled.h4`
  margin: 0;
  font-size: 16px;
`;

const Links = styled.div`
  font-size: 12px;
  margin: 0 20px;
  margin-top: 20px;

  display: flex;
`;

const Link = styled.a`
  display: flex;
  flex: 25%;

  justify-content: center;
  align-content: center;

  margin-right: 20px;
  border-radius: 2px;
  border: none;

  padding: 8px 16px;

  background-color: #0097a7;
  color: white;

  text-decoration: none;

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

  &:last-child {
    margin-right: 0;
  }
`;

const LinkLabel = styled.span`
  display: inline-block;
  margin-left: 5px;

  @media(max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };

    autoBind(this);
  }

  onClickMenuButton() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    }, () => {
      this.props.onMenuToggle(this.state.menuOpen);
    });
  }

  render() {
    const {
      menuOpen
    } = this.state;

    return (
      <Wrapper>
        { menuOpen && <SideMenu open={menuOpen}/> }

        <MenuButton size={50} onClick={this.onClickMenuButton} />

        <Title>@tolicodes</Title>
        <Subtitle>Anatoliy D. Zaslavskiy</Subtitle>
        <Links>
          <Link href="/resume.pdf">
            <FileDownload size={ICON_SIZE} />
            <LinkLabel>Resume</LinkLabel>
          </Link>

          <Link href="http://github.com/tolicodes" target="_blank">
            <Github size={ICON_SIZE} />
            <LinkLabel>Github</LinkLabel>
          </Link>

          <Link href="http://linkedin.com/in/tolicodes" target="_blank">
            <Linkedin size={ICON_SIZE} />
            <LinkLabel>LinkedIn</LinkLabel>
          </Link>

          <Link href="mailto:toli@tolicodes.com" target="_blank">
            <Email size={ICON_SIZE} />
            <LinkLabel>toli@tolicodes.com</LinkLabel>
          </Link>
        </Links>
      </Wrapper>
    )
  }
}
