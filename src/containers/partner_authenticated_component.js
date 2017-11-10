import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AuthenticatedComponent extends Component {
    componentDidMount() {
        const { partnerLoading, partner } = this.props;
        if (partnerLoading === false && !partner) {
            this.props.history.push('/login');
        }
    }
    render() {
        const { partner, children, partnerLoading } = this.props;
        return (
            partnerLoading === false && partner
        ) ? <div>{children}</div> : null;
    }
}

const mapStateToProps = state => {
    return { 
        partner: state.partner,
        partnerLoading: state.loading.partner
    }
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));