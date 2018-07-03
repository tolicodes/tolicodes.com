import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  AltSection,
  Heading,
  CenterContainer,
} from '../styles';

export default ({ text }) => (
  <AltSection id="about-me">
    <Heading>
      About Me
    </Heading>

    <CenterContainer>
      <ReactMarkdown source={text} />
    </CenterContainer>
  </AltSection>
)
