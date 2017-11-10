import React from 'react';
import {
    Thumbnail
} from 'react-bootstrap';

export const ThumbnailMenu = (props) => {
    const { 
        artFilterImage, 
        culinaryFilterImage, 
        musicFilterImage,
        firstTitle,
        secondTitle,
        thirdTitle 
    } = props;
    return (
        <div className="container thumbMenuContainer">
            <div className="row thumbMenu">
                <div className="col-md-4">
                    <Thumbnail  className="img-thumbnail img-responsive" href="#" alt="Art thumb" src={artFilterImage} />
                    <div className="menu-caption">
                        <h3>{firstTitle}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <Thumbnail className="img-thumbnail img-responsive" href="#" alt="Culinary thumb" src={culinaryFilterImage} />
                    <div className="menu-caption">
                        <h3>{secondTitle}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <Thumbnail className="img-thumbnail img-responsive" href="#" alt="Music thumb" src={musicFilterImage} />
                    <div className="menu-caption">
                        <h3>{thirdTitle}</h3>
                    </div>
                </div>
            </div>        
        </div>
    );
}