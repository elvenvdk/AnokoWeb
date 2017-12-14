import React, { Component } from 'React';

import { 
    NavbarMain
} from '../components/common/navbar_main'


class DiscoverPartners extends Component {
    render() {
        return (
            <div className="container-fluid discover-main">
                <NavbarMain 
                    labelR1="FAVORITES"
                    linkLRRef="#"
                    labelR2="CALENDAR"
                    linkR2Rev="#"
                    labelR3="LOG-OUT"
                    linkR3Ref="#"
                />
                <div className="container discover-header">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>EXPLORE OUR PARTNER OFFERINGS</h2>
                            <h4>CURATE YOUR LIFE WITH ANOKO</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid discover-thumb-menue">
                    <div className="row">
                        <div className="col-sm-4 shows-thumb">
                            <div className="shows-thumb-overlay">
                                <h3>SHOWS</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 tastings-thumb">
                            <div className="tastings-thumb-overlay">
                                <h3>TASTINGS</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 restaurants-thumb">
                            <div className="restaurants-thumb-overlay">
                                <h3>RESTAURANTS</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 venues-thumb">
                            <div className="venues-thumb-overlay">
                                <h3>VENUES</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 workshop-thumb">
                            <div className="workshop-thumb-overlay">
                                <h3>CLASS WORKSHOP</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 creative-brands-thumb">
                            <div className="creative-brands-thumb-overlay">
                                <h3>CREATIVE BRANDS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiscoverPartners;