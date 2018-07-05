import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  AltSection,
  Heading,
  CenterContainer,
} from '../styles';

export default ({ text, title, path }) => (
  <AltSection id={path}>
    <Heading>
      { title }
    </Heading>

    <CenterContainer>
      <ReactMarkdown source={text} />
    </CenterContainer>
  </AltSection>
)
