import React from 'react';

export const ScreenSearchLayout = props => {
    const {
        headerFirstLine, headerSecondLine,
        sideFilterLabel1, sideFilterLabel2,
        sideFilterLabel3, sideFilterLabel4,
        sideFilterLabel5, sideFilterLabel6,
        sideFilterLabel7, sideFilterLabel8,
        sideFilterLabel9, sideFilterLabel10,
        sideFilterLabel11, 
        thumbName1, thumbName2, thumbName3,
        thumbName4, thumbName5, thumbName6
    } = props;
    return (
        <div>
            <div className="container discover-header">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>EXPLORE OUR PARTNER OFFERINGS</h2>
                            <h4>CURATE YOUR LIFE WITH ANOKO</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container-fluid discover-thumb-menue">
                        <div className="side-filter-container">
                            <SideFilter 
                                label1="Theater"
                                label2="Music"
                                label3="Art"
                                label4="Fashion"
                                label5="Dance"
                                label6="Artsy Venues"
                                label7="Restaurants"
                                label8="Tastings"
                                label9="Classes"
                                label10="Creative Brands"
                                label11="Select All"
                            />
                        </div>
                        <div className="row">                            
                            <div className="col-sm-4 col-md-3 shows-thumb discover-thumbs">
                                <div className="shows-thumb-overlay thumbs-overlay">
                                    <h4 className="discover-thumbs-label">SHOWS</h4>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 tastings-thumb discover-thumbs">
                                <div className="tastings-thumb-overlay thumbs-overlay">
                                    <h4 className="discover-thumbs-label">TASTINGS</h4>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 restaurants-thumb discover-thumbs">
                                <div className="restaurants-thumb-overlay thumbs-overlay">
                                    <h4 className="discover-thumbs-label">RESTAURANTS</h4>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 venues-thumb discover-thumbs">
                                <div className="venues-thumb-overlay thumbs-overlay">
                                    <h4 className="discover-thumbs-label">VENUES</h4>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 workshop-thumb discover-thumbs">
                                <div className="workshop-thumb-overlay thumbs-overlay">
                                    <h4 className="discover-thumbs-label">CLASS WORKSHOP</h4>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 creative-brands-thumb discover-thumbs">
                                <div className="creative-brands-thumb-overlay thumbs-overlay">
                                    <h4 className="discover-thumbs-label">CREATIVE BRANDS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}