import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import autoBind from 'react-autobind';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';

import Header from './Header';

import ny from './assets/ny.jpg';
import sf from './assets/sf.jpg';
// import hiking from './assets/hiking.jpg';

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  font-size: 14px;

  ${({ menuOpen }) => css`
    margin-left: ${menuOpen ? '300px' : 0}
  `}
`;

const Heading = styled.h2`
  margin-bottom: 5px;
  margin-top: 20px;
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
`;

const AltSection = styled(Section)`
  margin-top: -5px;
  background: #f4f3f5;
  padding-bottom: 20px;
`;

const CenterContainer = styled.div`
  max-width: 780px;
  padding: 0 20px;
  margin: 0 auto;

  text-align: justify;
`;

const FullWidthYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YouTubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`;

const TEXT_PATHS = {
  aboutMe: '/sections-text/about-me.md',
};

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
    };

    autoBind(this);
  }

  componentDidMount() {
    this.fetchText();
  }

  onMenuToggle(menuOpen) {
    this.setState({
      menuOpen,
    });
  }

  fetchText() {
    Object.entries(TEXT_PATHS).forEach(async ([name, path]) => {
      const res = await fetch(path);
      const text = await res.text();
      this.setState({
        [name]: text,
      });
    });
  }

  render() {
    const {
      menuOpen,
      aboutMe,
    } = this.state;

    return (
      <Wrapper menuOpen={menuOpen}>
        <Header onMenuToggle={this.onMenuToggle} />

        <MainSection>
          <Heading>
Watch My Story
          </Heading>
          <YouTubeWrapper>
            <FullWidthYouTube
              videoId="z1VNwapOb8E"
            />
          </YouTubeWrapper>
        </MainSection>

        <AltSection>
          <Heading>
About Me
          </Heading>

          <CenterContainer>
            <ReactMarkdown source={aboutMe} />
          </CenterContainer>
        </AltSection>

        <MainSection>
          <Heading>
NY -> SF Transplant
          </Heading>

          <Slide>
            <SlideImage src={ny} />
            <SlideImage src={sf} />
          </Slide>
        </MainSection>

        <AltSection>
          <Heading>
Hobbies
          </Heading>
          <Slide>
            <SlideImage />
          </Slide>
        </AltSection>
      </Wrapper>
    );
  }
}
