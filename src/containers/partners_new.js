import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import ScreenSection from '../components/common/sreen_section';
import { InputField } from '../components/common/input_field';
import FileField from '../components/common/file_field';
import { FileDropField } from '../components/common/file_drop_field';
import { FormFooterButton } from '../components/common/form_footer_button';
import { createPartners } from '../actions/partner_actions';


class PartnersNew extends Component {
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
        this.setState(this.initialState);
    }

    onSubmit(data) {
        this.props.createPartners(data, this.state);
    }

    render() {
        const { handleSubmit } = this.props;        
        return (
            <div>
                <ScreenSection title="Create your partner account">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="card-body">
                            <Field
                                name="companyName"
                                component={InputField}
                                label="Company Name"
                                type="text"
                            />
                            <Field
                                name="companyType"
                                component={InputField}
                                label="Company Type"
                                type="text"
                            />
                            <Field
                                name="companyImage"
                                component={FileField}
                                label="Company Image"
                                
                            />
                            <Field
                                name="phoneNumber"
                                component={InputField}
                                label="Phone Number"
                                type="text"  
                            />
                            <Field
                                name="address"
                                component={InputField}
                                label="Address"
                                type="text"  
                            />
                            <Field
                                name="city"
                                component={InputField}
                                label="City"
                                type="text"  
                            />
                            <Field
                                name="state"
                                component={InputField}
                                label="State"
                                type="text"  
                            />
                            <Field
                                name="zip"
                                component={InputField}
                                label="Zip"
                                type="text"  
                            />
                            <label>
                                <h3>Contact Person</h3>
                            </label>
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
                                name="companyTitle"
                                component={InputField}
                                label="Company Title"
                                type="text"
                            />
                            <Field
                                name="contactPhone"
                                component={InputField}
                                label="Phone Number"
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
                            <FormFooterButton 
                                submitLabel="Create Partner Account"
                                otherLabel="Go Back"
                            />
                        </div>
                    </form>
                </ScreenSection>
            </div>
        )
    }
}



export default reduxForm({
    form: 'PartnersNewForm'
})
(connect(null, { createPartners })(PartnersNew));