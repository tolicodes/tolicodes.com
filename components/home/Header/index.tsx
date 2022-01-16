import React from "react";
import Image from "next/image";
import {
  Container,
  Logo,
  SocialMediaLinks,
  Navbar,
  WatchMyStory,
  NavWrapper,
} from "./styled";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <Container>
      <NavWrapper>
        <Logo>
          <h1>
            toli&lt;<strong>codes</strong>&gt;
          </h1>
          <p>Anatoliy D. Zaslavskiy</p>
        </Logo>
        <SocialMediaLinks>
          <a href={"https://linkedin.com"} target={"_blank"} rel={"noreferrer"}>
            <Image
              src={"/icons/linkedin.svg"}
              alt={"LinkedIn"}
              width={"22px"}
              height={"22px"}
            />
          </a>
          <a href={"https://github.com"} target={"_blank"} rel={"noreferrer"}>
            <Image
              src={"/icons/github.svg"}
              alt={"GitHub"}
              width={"22px"}
              height={"22px"}
            />
          </a>
          <a
            href={"mail:contact@webaddress.com"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Image
              src={"/icons/email.svg"}
              alt={"Email"}
              width={"22px"}
              height={"22px"}
            />
          </a>
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
        <iframe
          src={"https://www.youtube.com/embed/z1VNwapOb8E"}
          title={"How I Learned Empathy with Asperger's | Anatoliy Zaslavskiy"}
          frameBorder={0}
          allow={
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          }
          allowFullScreen={true}
        />
      </WatchMyStory>
    </Container>
  );
};

export default Header;
