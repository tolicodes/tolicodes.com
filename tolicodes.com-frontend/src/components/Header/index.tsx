import React from 'react'

import { SiteName } from './SiteName';
import { Container } from './Container'

export const Header = () => {
    return (
        <Container>
            <SiteName siteLogoSrc={'Logo Goes Here'} siteTagline={'Anatoliy D. Zaslavskiy'} />
        </Container>
    )
}
