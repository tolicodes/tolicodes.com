import React from 'react';

import {
  Heading,
  MainSection,
  Slide,
  SlideImage,
} from '../styles';

import ny from '../assets/ny.jpg';
import sf from '../assets/sf.jpg';

export default () => (
  <MainSection id="ny-to-sf">
    <Heading>
      NY -> SF Transplant
    </Heading>

    <Slide>
      <SlideImage src={ny} />
      <SlideImage src={sf} />
    </Slide>
  </MainSection>
)
