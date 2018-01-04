import React, { Component } from 'React';

import { 
    NavbarMain
} from '../components/common/navbar_main'
import { SideFilter } from '../components/side_filter';
import { ScreenSearchLayout } from '../components/screen_search_layout';

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
                <ScreenSearchLayout 
                    thumbName1="SHOWS"
                    linkName1="/shows"
                    thumbName2="TASTINGS"
                    linkName2="/tastings"
                    thumbName3="RESTAURANTS"
                    linkName3="/restaurants"
                    thumbName4="VENUES"
                    linkName4="/venues"
                    thumbName5="CLASS WORKSHOP"
                    linkName5="/workshops"
                    thumbName6="CREATIVE BRANDS"
                    linkName6="/creative-brands"
                />
            </div>
        )
    }
}

export default DiscoverPartners;