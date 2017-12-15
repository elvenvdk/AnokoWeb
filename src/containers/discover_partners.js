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
                    
                />
            </div>
        )
    }
}

export default DiscoverPartners;