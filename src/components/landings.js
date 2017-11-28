import React, { Component } from 'react';

import VideoScreen from './video_screen';
import { DownArrow } from './down_arrow';


export const Landings = props => {
    const { children } = props;
    return (
        <div className="container landing1-container">
            {children}
        </div>
    )
}
