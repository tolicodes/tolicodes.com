import React from "react";

import { GSBase } from "../../constants/styles/global-styles";

import { Container } from "./Container";

import { Header } from "../Header";
import { YouTubeVideo } from "../YouTubeVideo";
import { Description } from "../Description";

import { data } from "../../data/data";

function App() {
  return (
    <Container>
      <Header />
      <YouTubeVideo
        src={data.youTubeVideo.src}
        height={data.youTubeVideo.height}
        title={data.youTubeVideo.title}
      />
      <Description title={data.description.title}>
        {data.description.aboutMeText}
      </Description>
      <GSBase />
    </Container>
  );
}

export default App;
