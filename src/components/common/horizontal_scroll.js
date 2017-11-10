import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

export const HScrolling = props => {
    const { children } = props;
    const child = {width: `30em`, height: `100%`}
    const parent = { width: `60em`, height: `100%`}
    return (
        <div style={parent}>
            <HorizontalScroll>
                <div style={child}>
                    {children}
                </div>
            </HorizontalScroll>
        </div>
    )
}