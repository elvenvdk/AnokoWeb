import React from 'react';

import { NavbarMain } from './common/navbar_main';

export const LandingScreenSection = props => {
        const { children, sectionClassName } = props;
        return (
            <div className={sectionClassName}>
                <div className="landing-nav-container">
                    <NavbarMain 
                        labelL1="About"
                        linkL1Ref="#about-container"
                        labelL2="Benefits"
                        linkL2Ref="#benefits-container"
                        labelL3="Membership"
                        linkL3Ref="#landings-membership"
                        labelL4="Partners"
                        linkL4Ref="#landings-partners-gallery"
                        labelR1="Become a Member"
                        linkR1Ref="/member/new"
                        labelR2="Log in"
                        linkR2Ref="#"
                    />
                </div>
              {children}
            </div>
        ) 
}