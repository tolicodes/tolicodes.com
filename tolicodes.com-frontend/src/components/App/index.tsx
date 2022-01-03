import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import { Container } from './Container';

import { Header } from '../Header';
import { SiteName } from '../SiteName';
import { SocialNetworkMenu } from '../SocialNetworkMenu';
import { Menu } from '../Menu';
import { YouTubeVideo } from '../YouTubeVideo';
import { Description } from '../Description';

import { data } from '../../data'

function App() {
  return (
    <Container>
      <GeistProvider>
        <CssBaseline>
          <Header>
            <SiteName siteLogoSrc={'Logo Goes Here'} siteTagline={'Anatoliy D. Zaslavskiy'} />
            <SocialNetworkMenu links={data.socialMediaLinks}/>
            <Menu links={data.menuLinks} />
          </Header>
          <YouTubeVideo
            src={data.youTubeVideo.src}
            height={data.youTubeVideo.height}
            title={data.youTubeVideo.title}
          />
          <Description title={data.description.title}>
            {data.description.aboutMeText}
          </Description>
        </CssBaseline>
      </GeistProvider>
    </Container>
  );
}

export default App;