import React from 'react';

import {
  AltSection,
  Heading,
  CenterContainer,
  MarkdownContainer,
} from '../styles';

export default ({ text, title, path }) => (
  <AltSection id={path}>
    <Heading>
      { title }
    </Heading>

    <CenterContainer>
      <MarkdownContainer source={text} />
    </CenterContainer>
  </AltSection>
)
