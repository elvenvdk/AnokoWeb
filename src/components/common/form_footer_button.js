import React from 'react';
import { 
    Button
} from 'react-bootstrap';


export const FormFooterButton = props => {
    const { submitLabel, otherLabel, goToLink, history } = props;
    return (
        <div className="d-flex justify-content-between">
            <Button bsStyle="primary" type="submit">{submitLabel}</Button>
            <a className="btn btn-info" href={goToLink}>{otherLabel}</a>
        </div>
    )
}