import React from 'react';

import './SiteName.css'

export interface ISiteNameProps {
    siteLogoSrc: string, siteTagline: string
}

export const SiteName = ({ siteLogoSrc, siteTagline }: ISiteNameProps) => {
    return (
        <>
            <div className='siteNameContainer'>
                <h1 id='siteLogo'>{'toli<codes>'}</h1>
                {/* <img src={siteLogoSrc} alt='logo'></img> */}
                <p id='siteTagline'>{siteTagline}</p>
            </div>
        </>
    )
}