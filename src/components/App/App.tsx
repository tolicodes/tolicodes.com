import { Col, CssBaseline, GeistProvider, Page, Row } from "@geist-ui/react";
import React from "react";
import styled from "styled-components";
import { Description } from "../Description";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { SocialNetworkMenu, SocialNetworkType } from "../SocialNetworkMenu";
import { YouTubeVideo } from "../YouTubeVideo";

const userPicture = require("./assets/placeholder-user-picture.png");
const logo = require("./assets/logo.png");

const Container = styled.div`
  color: #ffffff !important;
  background-color: #272727 !important;
  width: 1200px;
  padding: 65px 78px;
  box-sizing: border-box;
`;

interface AppProps {}

export function App(props: AppProps) {
  let menuLinks = [
    {
      title: "Resume",
      url: "/resume",
    },
    {
      title: "CodeMentor",
      url: "/codeMentor",
    },
    {
      title: "My story",
      url: "/my-story",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Hobbies",
      url: "/hobbies",
    },
    {
      title: "Open Source",
      url: "/open-source",
    },
  ];
  let socialMediaLinks = [
    {
      type: SocialNetworkType.LinkedIn,
      url: "https://www.linkedin.com/in/tolicodes/",
    },
    {
      type: SocialNetworkType.GitHub,
      url: "https://github.com/tolicodes/tolicodes.com",
    },
  ];

  const aboutMeText = (
    <>
      <p>
        I'm a lover of dogs, yoga, and travel. I am a big proponent of animal
        biggest passions is full-stack Javascript Development. e, healthy
        living, and mental health education. But one of my{" "}
      </p>
      <p>
        My specialties are Projects. Prototyping/MVPs, Data Visualization, Code
        Reviews, ontends, and Social Media Marketing. I work full time at HOVER,
        but I am available for consulting pr Scaling Javascript Fr
      </p>
      <p>
        Projects, I've worked with all sorts of companies: big, small, startups,
        small pr American Expr ess, Federal Reserve, WSJ, Per colate, and
        Chanel. agencies, fnancial, health, politics, you name it. My past
        clients include
      </p>
      <p>
        This experience, along with my br taking on and over delivering pr
        eatives I am confdent in oad network of designers, developers,
        marketers, animators, copywriters, and other cr ojects of most sizes
      </p>
      <p>
        ofound ef eativity and pr oductivity mental health education. Although
        they have had a pr life, I’ve also been able to channel them into cr
        gers and Bipolar Disor der , I am an avid supporter of fect on my As
        someone with Asper
      </p>
    </>
  );

  return (
    <Container>
      <GeistProvider>
        <CssBaseline />
        <Header logo={<img src={logo} alt="Logo" />}>
          <Menu links={menuLinks} />
          <SocialNetworkMenu links={socialMediaLinks} />
        </Header>
        <YouTubeVideo
          src={"https://youtube.com/embed/oagszCmJLpU"}
          height={"501px"}
          title={"Watch My Story"}
        />
        <Description title={"About me"} pictureUrl={userPicture}>
          {aboutMeText}
        </Description>
      </GeistProvider>
    </Container>
  );
}
