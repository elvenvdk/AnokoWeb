import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { ScreenSection } from '../components/common/screen_section';
import { InputField } from '../components/common/input_field';
import { FormFooterButton } from '../components/common/form_footer_button';
import { login, getPartner } from '../actions/partner_actions';
import { ErrorAlert } from '../components/common/error_alert';
import { email, required } from '../validation/form_input_validation';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    onSubmit(data) {
        this.props.login(data.email, data.password)
            .catch((err) => {
                this.setState({
                    error: err
                });
            });
    }

    componentWillMount() {
        if (this.props.partner !== null) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.partner !== null) {
           nextProps.history.push('/'); 
        }
    }
        
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <ScreenSection title="Partner Sign in">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="card-body">
                            <Field
                                name="email"
                                component={InputField}
                                label="Email"
                                validate={[required, email]}
                                required={true}
                                type="email"
                            />
                            <Field
                                name="password"
                                component={InputField}
                                label="Password"
                                validate={required}
                                required={true}
                                type="password"
                            />
                            {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
                            <FormFooterButton 
                                submitLabel="Sign in" 
                                otherLabel="Create Partner Account"
                                goToLink="/partners/new"
                            />
                        </div>
                    </form>
                </ScreenSection>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { partner: state.partner };
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, { login, getPartner })(Login));