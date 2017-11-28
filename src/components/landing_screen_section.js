import React from 'react';

import { NavbarMain } from './common/navbar_main';

export const LandingScreenSection = props => {
        const { children, sectionClassName } = props;
        return (
            <div className={sectionClassName}>
                <div className="landing-nav-container">
                    <NavbarMain 
                        labelL1="About"
                        linkL1Ref="#"
                        labelL2="Benefits"
                        linkL2Ref="#"
                        labelL3="Membership"
                        linkL3Ref="#"
                        labelR1="Become a Member"
                        linkLR1Ref="#"
                        labelR2="Log in"
                    />
                </div>
              {children}
            </div>
        ) 
}