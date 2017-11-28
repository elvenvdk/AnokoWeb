import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    Thumbnail,
    Carousel,
} from 'react-bootstrap';

import { NavbarMain } from '../components/common/navbar_main';
import { PageHeader } from '../components/common/page_header';
import { ThumbnailMenu } from '../components/thumbnail_menu';
import ScreenSection from '../components/common/sreen_section';
import { 
    PreviewPicture,
    PreviewPictureMain,
    CarouselView 
} from '../components/common/preview_picture';
import {
    getDbPartners,
} from '../actions/partner_actions';

class Discover extends Component {
    state = { partner: '' };
    componentDidMount() {
        this.props.getDbPartners();
        
    }
    renderFeatPartners() {
        const { partnerData, uid } = this.props;
        return _.map(_.filter(partnerData, (partner, key) => {
            return key !== uid;
        }), (partner, key) => {
            return (
                    <Carousel.Item key={key}>
                        <img width={900} height={500} alt="900x500" src={partner.picture} />
                        <Carousel.Caption>
                            <h3>{partner.companyName}</h3>
                            <h4>{partner.companyType}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
            )
        })
    }

    renderPartners() {
        const { partnerData, uid } = this.props;
        return _.map(_.filter(partnerData, (partner, key) => {
            return key !== uid;
        }), (partner, key) => {
            return (
                <div className="mainPartner" key={key}>
                    <div className="row text-center">
                        <div className="Partners-col">
                            <PreviewPictureMain 
                                pictureUrl={partner.picture}
                                companyName={partner.companyName}
                                companyType={partner.companyType}
                            /> 
                        </div>                           
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container main-container">
                <div className="container top-container">
                    <NavbarMain 
                    labelL1="Filter Partners"
                    linkL1Ref = "#"
                    labelL2="Favorites"
                    linkL2Ref="#"
                    labelL3="Profile"
                    linkL3Ref="#"
                    labelR1="Events"
                    linkR1Ref="#"
                    labelR2="Discover"
                    linkR2Ref="#"
                    labelR3="Community"
                    linkR3Ref="#"
                    />
                    <PageHeader 
                        title="Discover" 
                        blurb="Anoko Partners and all they have to offer!"
                        backgroundImage={imgHeader}
                    />
                </div>
                <div className="container featured-container">
                    <div className="featured-header">
                        <h2 className="featured-header-text">Featured Partners</h2>
                    </div>
                    <div>   
                        <Carousel>
                            {this.renderFeatPartners()}
                        </Carousel>
                    </div>
                    
                    <div className="container partner-container">
                        {this.renderPartners()}
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    const checkedPartner = state.partner || {};
    return {
        uid: checkedPartner.uid, partnerData: state.dbPartner
    };
}

export default connect(mapStateToProps, { getDbPartners })(Discover);