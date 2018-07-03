import React from 'react';

import {
  Heading,
  AltSection,
  Slide,
  SlideImage,
} from '../styles';

import hiking from '../assets/hiking.jpg';

export default () => (
  <AltSection id="hobbies">
    <Heading>
      Hobbies
    </Heading>
    <Slide>
      <SlideImage src={hiking} />
    </Slide>
  </AltSection>
);
