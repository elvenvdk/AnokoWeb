import React, { Component } from 'react';
import { Link } from 'react-router';

import PartnersNew from './partners_new';
import { Landings } from '../components/landings';
import VideoScreen from '../components/video_screen';
import { DownArrow } from '../components/down_arrow';
import { 
  About,
  Benefits,
  Partners,
  Membership 
} from '../components/landing_items';
import { LandingScreenSection } from '../components/landing_screen_section';

class Landing extends Component {
  render() {
    return (
      <LandingScreenSection sectionClassName="landings-supermain-container" id="landing-supermain">   
        <div className="container-fluid">
            <a href="/member/new" className="btn btn-outline btn-lg">JOIN ANOKO</a> 
          <VideoScreen />
        </div>
        <div className="container-fluid landings-about-container" id="landings-about">
          <About />
        </div>
        <div className="container-fluid landings-benefits-container" id="landings-benefits">
            <div className="benefits-overlay">
              <Benefits />
            </div>
        </div>
        <div className="container-fluid landings-partners-gallery-container" id="landings-partners-gallery">
          <Partners />
        </div>
        <div className="container-fluid landings-membership-container" id="landings-membership">
          <Membership />
        </div>
      </LandingScreenSection>
    );
  }
}

export default Landing;
