import React from "react";
import Image from "next/image";
import { SocialMediaLinks, Navbar, WatchMyStory, NavWrapper } from "./styled";
import SocialIcon from "../../global/SocialIcon";
import YouTube from "react-youtube";
import { Flex } from "@chakra-ui/react";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <Flex direction="column">
      <NavWrapper>
        <Image src="/logo.png" height={55} width={225} objectFit="contain" />
        <SocialMediaLinks>
          <SocialIcon
            src="/icons/linkedin.svg"
            href="https://linkedin.com"
            size={22}
            alt="LinkedIn"
          />
          <SocialIcon
            src="/icons/github.svg"
            href="https://github.com"
            size={22}
            alt="Github"
          />
          <SocialIcon
            src="/icons/email.svg"
            href="mail:contact@webaddress.com"
            size={22}
            alt="E-Mail"
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
    </Flex>
  );
};

export default Header;
