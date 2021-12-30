import React from 'react';
import { SiteNameContainer, SiteTagline, SiteLogo } from './Containers';

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
                <SiteTagline>
                    {siteTagline}
                </SiteTagline>
            </SiteNameContainer>
        </>
    )
}