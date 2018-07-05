import React from 'react';

import {
  Heading,
  MainSection,
  Slide,
  SlideImage,
  SlideTextContainer,
  SlideText,
  SlideHeading,
} from '../styles';

import hiking from '../assets/hiking.jpg';
import aspergers_speech from '../assets/aspergers_speech.jpg';
import bidawee from '../assets/bidawee.jpg';
import acro from '../assets/acro.jpg';
import biking from '../assets/biking.jpg';
import toastmasters from '../assets/toastmasters.jpg';
import me_and_rocks from '../assets/me_and_rocks.jpg';

export default ({ title, path }) => (
  <MainSection id={path}>
    <Heading>
      { title }
    </Heading>

    <Slide>
      <SlideImage src={hiking} />
      <SlideTextContainer>
        <SlideText>
          <SlideHeading>Nature</SlideHeading>
          I love being out in nature
        </SlideText>
      </SlideTextContainer>
    </Slide>

    <Slide>
      <SlideTextContainer left={true}>
        <SlideText>
          <SlideHeading>Public Speaking</SlideHeading>
          I go to ToastMasters every Tuesday.

        </SlideText>
      </SlideTextContainer>

      <SlideImage src={aspergers_speech} />
    </Slide>

    <Slide>
      <SlideImage src={bidawee} />

      <SlideTextContainer>
        <SlideText>
          <SlideHeading>Dogs</SlideHeading>
          I am a huge dog fan. I volunteered with many organizations for animal welfare.

        </SlideText>
      </SlideTextContainer>
    </Slide>

    <Slide>
      <SlideTextContainer left={true}>
        <SlideText>
          <SlideHeading>AcroYoga</SlideHeading>
          A mix of acrobatics and yoga.

        </SlideText>
      </SlideTextContainer>

      <SlideImage src={acro} />
    </Slide>

    <Slide>
      <SlideImage src={biking} />

      <SlideTextContainer>
        <SlideText>
          <SlideHeading>Biking</SlideHeading>
          I bike everywhere.

        </SlideText>
      </SlideTextContainer>
    </Slide>

    <Slide>
      <SlideTextContainer left={true}>
        <SlideText>
          <SlideHeading>ToastMasters</SlideHeading>
          Club for public speaking

        </SlideText>
      </SlideTextContainer>

      <SlideImage src={toastmasters} />
    </Slide>

    <Slide>
      <SlideImage src={me_and_rocks} />

      <SlideTextContainer>
        <SlideText>
          <SlideHeading>Dogs</SlideHeading>
          I love dogs!

        </SlideText>
      </SlideTextContainer>
    </Slide>
  </MainSection>
);
