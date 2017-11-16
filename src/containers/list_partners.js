import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    Button,
    Thumbnail,
    Carousel,
    Grid,
    Row,
} from 'react-bootstrap';

import NavbarMain from '../components/common/navbar_main';
import { PageHeader } from '../components/common/page_header';
import { ThumbnailMenu } from '../components/thumbnail_menu';
import ScreenSection from '../components/common/sreen_section';
import { 
    PreviewPicture,
    PreviewPictureMain 
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
                <div>
                    <NavbarMain />
                    <PageHeader 
                        title="Discover" 
                        blurb="Anoko Partners and all they have to offer!"
                        backgroundImage={imgHeader}
                    />
                    <ThumbnailMenu
                        artFilterImage={imgArtThumb}
                        culinaryFilterImage={imgCulinaryThumb}
                        musicFilterImage={imgMusicThumb}
                        firstTitle="Art"
                        secondTitle="Culinary"
                        thirdTitle="Music"
                    />
                </div>
                
                <div className="container featured-container">
                    <div className="featured-header">
                        <h2 className="featured-header-text">Partners</h2>
                    </div>
                    <div>   
                        <div>
                            {this.renderPartners()}
                        </div>
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