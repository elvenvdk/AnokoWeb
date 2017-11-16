import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    Thumbnail,
    Carousel,
} from 'react-bootstrap';

import NavbarMain from '../components/common/navbar_main';
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
import {
    imgHeader,
    imgArtThumb,
    imgCulinaryThumb,
    imgMusicThumb
} from '../images';

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
                    <Carousel.Item>
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
                <div className="container mainPartner" key={key}>
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
            <div>
                <div className="container top-container">
                    <NavbarMain />
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
                    <ThumbnailMenu
                        artFilterImage={imgArtThumb}
                        culinaryFilterImage={imgCulinaryThumb}
                        musicFilterImage={imgMusicThumb}
                        firstTitle="Art"
                        secondTitle="Culinary"
                        thirdTitle="Music"
                    />
                </div>
                <div className="container partner-container">
                    <div>
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