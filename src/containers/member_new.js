import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import ScreenSection from '../components/common/screen_section';
import { InputField } from '../components/common/input_field';
import { FormFooterButton } from '../components/common/form_footer_button';
import FileField from '../components/common/file_field';
import { createMembers } from '../actions/member_actions';

class MemberNew extends Component {
    constructor(state) {
        super(state);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
        this.initialState = this.state;
    }

    resetForm() {

    }
    render() {
        return (
            <div>
                <ScreenSection title="Create your member account">
                    <form>
                        <div className="card-body">
                            <Field
                                name="companyName"
                                component={InputField}
                                label="Company Name"
                                type="text"
                            />
                            <Field
                                name="title"
                                component={InputField}
                                label="Title"
                                type="text"
                            />
                            <Field
                                name="firstName"
                                component={InputField}
                                label="First Name"
                                type="text"
                            />
                            <Field
                                name="lastName"
                                component={InputField}
                                label="Last Name"
                                type="text"
                            />
                            <Field
                                name="email"
                                component={InputField}
                                label="Email"
                                type="text"
                            />
                            <Field
                                name="password"
                                component={InputField}
                                label="Password"
                                type="password"
                            />
                            <Field
                                name="confirmPassword"
                                component={InputField}
                                label="Confirm Password"
                                type="password"
                            />
                            <Field
                                name="profilePicture"
                                component={FileField}
                                label="Profile Picture"
                            />
                            <FormFooterButton
                                submitLabel="Create Member Account"
                                otherLabel="Go Back"
                                goToLink="/"
                            />
                        </div>
                    </form>
                </ScreenSection>
            </div>
        )
    }
}


export default reduxForm({
    form: 'MemberNewForm'
})(connect(null ,{ createMembers })(MemberNew));