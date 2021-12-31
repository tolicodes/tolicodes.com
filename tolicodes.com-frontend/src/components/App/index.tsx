import React from 'react';

import { Container } from './Container';
import { Header } from '../Header';
import { SiteName } from '../SiteName';
import { SocialNetworkMenu } from '../SocialNetworkMenu';
import { Menu } from '../Menu';

import { data } from '../../data'

function App() {
  return (
    <>
      <Container>
        <Header>
          <SiteName siteLogoSrc={'Logo Goes Here'} siteTagline={'Anatoliy D. Zaslavskiy'} />
          <SocialNetworkMenu links={data.socialMediaLinks}/>
          <Menu links={data.menuLinks} />
        </Header>
      </Container>
    </>
  );
}

export default App;