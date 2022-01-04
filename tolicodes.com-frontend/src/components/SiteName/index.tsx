import React from 'react';
import { SiteNameContainer, SiteTagline, SiteLogo } from './Containers';

// const logo = require("./assets/logo.png");

export interface ISiteNameProps {
    siteLogoSrc: string, siteTagline: string
}

export const SiteName = ({ siteLogoSrc, siteTagline }: ISiteNameProps) => {
    return (
        <>
            <SiteNameContainer>
                <SiteLogo>
                    {'toli<codes>'}
                    {/* <img src={siteLogoSrc} alt='logo'></img> */}
                </SiteLogo>
                {/* <img src={logo} alt='Logo' /> */}
                <SiteTagline>
                    {siteTagline}
                </SiteTagline>
            </SiteNameContainer>
        </>
    )
}