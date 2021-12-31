import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import { Container } from './Container';
import { Header } from '../Header';
import { SiteName } from '../SiteName';
import { SocialNetworkMenu } from '../SocialNetworkMenu';
import { Menu } from '../Menu';

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
        </CssBaseline>
      </GeistProvider>
    </Container>
  );
}

export default App;