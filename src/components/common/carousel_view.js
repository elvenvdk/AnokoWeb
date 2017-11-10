import React from 'react';
import ReactDOM from 'react-dom';
import {
    Carousel,
} from 'react-bootstrap';

export const CarouselView = props => {
    const { imgSource, imgLabel, imgCaption } = props;
    return (
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} src={imgSource} />
                <Carousel.Caption>
                    <h3>{imgLabel}</h3>
                    <h4>{imgCaption}</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

ReactDOM.render(CarouselView, mountNode);