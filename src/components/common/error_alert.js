import React from 'react';

export const ErrorElert = props => {
    return (
        <div className="alert alert-danger" role="alert">
            {props.children}
        </div>
    );
};