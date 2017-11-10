import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPartner, getDbPartner } from '../actions/partner_actions';
import { Loading } from '../components/common/loading';
import { auth } from '../databases';

class PartnerLoadingComponent extends Component {
    componentWillMount() {
        const { partnerLoading, dbPartnerLoading } = this.props;
        if(partnerLoading === undefined) {
            this.props.getPartner();
        }
        if(dbPartnerLoading === undefined) {
            this.props.getDbPartner();
        }
    }
    render() {
        const { partnerLoading, dbPartnerLoading, children } = this.props;
        if(partnerLoading === false && dbPartnerLoading === false) {
            return (
                <div>
                    {children}
                </div>
            );
        }
        else {
            return (
                <Loading />
            );
        }        
    }
}

const mapStateToProps = state => {
    return {
        partnerLoading: state.loading.partner,
        dbPartnerLoading: state.loading.dbPartner,
        partner: state.partner
    };
}

export default withRouter(connect(mapStateToProps, { getPartner, getDbPartner })(PartnerLoadingComponent));