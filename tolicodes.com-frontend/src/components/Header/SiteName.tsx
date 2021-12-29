import React from 'react';

export interface ISiteNameProps {
    siteLogoSrc: string, siteTagline: string
}

export const SiteName = ({ siteLogoSrc, siteTagline }: ISiteNameProps) => {
    return (
        <>
            <div>
                <img src={siteLogoSrc} alt='logo'></img>
            </div>
            <div>
                <h3>{siteTagline}</h3>
            </div>
        </>
    )
}