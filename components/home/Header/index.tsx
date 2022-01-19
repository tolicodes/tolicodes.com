import React from "react";
import Image from "next/image";
import {
  Container,
  SocialMediaLinks,
  Navbar,
  WatchMyStory,
  NavWrapper,
} from "./styled";
import SocialIcon from "../../global/SocialIcon";
import YouTube from "react-youtube";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <Container>
      <NavWrapper>
        <Image src="/logo.png" height={55} width={225} objectFit="contain" />
        <SocialMediaLinks>
          <SocialIcon
            src="/icons/linkedin.svg"
            href="https://linkedin.com"
            size={22}
          />
          <SocialIcon
            src="/icons/github.svg"
            href="https://github.com"
            size={22}
          />
          <SocialIcon
            src="/icons/email.svg"
            href="mail:contact@webaddress.com"
            size={22}
          />
        </SocialMediaLinks>
        <Navbar>
          <ul>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#codeMentor">CodeMentor</a>
            </li>
            <li>
              <a href="#myStory">My Story</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#hobbies">Hobbies</a>
            </li>
            <li>
              <a href="#openSource">Open Source</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </Navbar>
      </NavWrapper>
      <WatchMyStory>
        <h1>Watch My Story</h1>
        <YouTube
          videoId="z1VNwapOb8E"
          opts={{
            height: "540",
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </WatchMyStory>
    </Container>
  );
};

export default Header;
