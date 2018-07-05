import React from 'react';

import {
  Heading,
  AltSection,
  Slide,
  SlideImage,
} from '../styles';

import ny from '../assets/ny.jpg';
import sf from '../assets/sf.jpg';

export default ({ title, path }) => (
  <AltSection id={path}>
    <Heading>
      { title }
    </Heading>

    <Slide>
      <SlideImage src={ny} />
      <SlideImage src={sf} />
    </Slide>
  </AltSection>
)
