import React, { Component } from 'react';
import PartnersNew from './partners_new';
import { Landings } from '../components/landings';
import VideoScreen from '../components/video_screen';
import { DownArrow } from '../components/down_arrow';
import { 
  About,
  Benefits,
  Partners 
} from '../components/landing_items';
import { LandingScreenSection } from '../components/landing_screen_section';

class Landing extends Component {
  render() {
    return (
      <LandingScreenSection sectionClassName="landings-supermain-container">   
        <div className="container-fluid">     
          <VideoScreen />
        </div>
        <div className="container-fluid landings-about-container">
          <About />
        </div>
        <div className="container-fluid landings-benefits-container">
            <div className="benefits-overlay">
              <Benefits />
            </div>
        </div>
        <div className="container-fluid landings-partners-container">
          <Partners />
        </div>
      </LandingScreenSection>
    );
  }
}

export default Landing;
