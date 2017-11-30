import React from 'react';``

import { PageHeader } from '../components/common/page_header';
import { anokoBrunch1 } from '../images';
import GalleryView from '../components/gallery_view';

export const About = props => {
    return (
        <div className="container" id="about-container">
            <div className="row container-about-us">
                <div className="col-lg-12">
                    <div className="about-us-header">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-text-container">
                        <p>
                            ANOKO is a private club connecting its members 
                            with deals, discounts and VIP access to unique art, entertainment and culinary experiences. 
                            We do this by partnering with a diverse array of individuals and organizations, including art institutions, artists, hotels, restaurants, 
                            performance venues and festivals/fairs. 
                        </p>
                        <p>
                            We do not have a brick and mortar location – ANOKO exists as a “third space”. When you leave 
                            your home, a place which sociologists have termed the “first space” and you depart from the 
                            workplace, also known as the “second space,” you enter the “third space” – a place of fluidity, 
                            creativity, community, enrichment, interaction and growth. A place which can be inhabited by 
                            multiple participants, physically or remotely, simultaneously or asynchronously. The third space is 
                            where self discovery occurs; it is where lasting connections are made; it is where the oppressed 
                            plot their liberation; and it is where people let their “real” selves show.  
                        </p>
                        <p>
                            It is through education about and access to art, that ANOKO 
                            is curating an ecosystem to help its members build both cultural and 
                            financial wealth. It is no coincidence that “wealth” also happens to 
                            be the meaning of “ANOKO” in the Nigerian language, Igala.  
                        </p>
                        <p>
                            Curating | Cultural | Connections
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Benefits = () => {
    return (
        <div className="container-fluid" id="benefits-container">
            <div className="row container-benefits">
                <div className="col-lg-12">
                    <h2>The Benefits</h2>
                    <p>
                        Your membership with ANOKO 
                        gets you access to a thoughtfully curated 
                        art ecosystem and a community of like-minded 
                        spirits. Membership is currently only available in New York City.
                    </p>
                    <div className="row benefits-grid">
                        <div className="col-sm-6">
                            <div className="benefits1 text-container">
                                <h3>EXCLUSIVE</h3>
                                <p>
                                    Enjoy exclusive membership 
                                    discounts and/or VIP access to art 
                                    events, classes, performances, 
                                    festivals, restaurants, hotels, etc.
                                </p>    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="benefits2 text-container">
                                <h3>COMMUNITY</h3>
                                <p>
                                    Meet diverse professionals who share 
                                    common passions and interests
                                </p>    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="benefits3 text-container">
                                <h3>EVENTS</h3>
                                <p>
                                    Attend curated events specially 
                                    tailored to your interests.
                                </p>    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="benefits4 text-container">
                                <h3>ART ADVISORY</h3>
                                <p>
                                    Start building or grow your fine art 
                                    collection with tips from our expert advisors.
                                </p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Partners = () => {
    return (
        <div className="container-fluid container-partnersImage-gallery">
            <div className="row container-partner-gallery">
                <div className="col-lg-12">
                    <h2>Partners</h2>
                    <div className="partner-join-btn-container">
                        <button className="btn btn-default partner-join-btn">Partner with Us</button>
                    </div>
                    <p>Art Classes | Arts & Culture | Restaurants | Performances | Hotels | Nightlife</p>
                    <br />
                    <br />
                    <GalleryView />
                </div>
            </div>
        </div>
    )
    
}

export const Membership = () => {
    return (
        <div className="container-fluid">
            <div className="row container-membership">
                <div className="col-lg-12">
                    <h2>HOW DOES ANOKO MEMBERSHIP WORK?</h2>
                    <div className="row">
                        <div className="col-md-8 membership-header">
                            <p>
                                Our full membership program will 
                                open after our trial membership program 
                                is complete, after December 31, 2017. 
                                Currently, an ANOKO membership is 
                                available at no cost through our 
                                trial membership program.
                            </p>
                        </div>
                    </div>
                    <div className="row membership-row">
                        <div className="col-sm-3">
                            <h3>COMPLETE MEMBERSHIP APPLICATION</h3>
                            <p>
                                Our selection process is simple! 
                                We look for people who share our core values and 
                                seek growth through education and community.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h3>PAY MEMBERSHIP FEE</h3>
                            <p>There is an annual membership fee of $360 or $30 per month.</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>DOWNLOAD MEMBERSHIP CARD</h3>
                            <p>
                                You will receive a private link to download an ANOKO 
                                digital membership pass, which gets stored in your Apple 
                                or Android wallet.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h3>GET ACCESS TO BENEFITS</h3>
                            <p>
                                Your digital membership card is constantly 
                                updated as we add partners, upcoming events 
                                and new deals. Flip your card over and “refresh” 
                                the screen for updates. Present your 
                                nique membership card at participating partners 
                                for VIP access and deals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}