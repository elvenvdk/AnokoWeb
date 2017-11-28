import React from 'react';
import ReactDOM from 'react-dom';
import {
    Carousel,
} from 'react-bootstrap';

export const PreviewPicture = props => {
    const { pictureUrl } = props;
    return (
        <img 
            className="img-fluid mb-2 mt-2" 
            src={pictureUrl} 
        />
    )
}

export const PreviewPictureMain = props => {
    const { pictureUrl, companyName, companyType } = props;
    return (
        <div className="row preview-pic-row">
            <div className="ol-sm-3 col-xs-3">
                <div className="img-preview-main card text-white" style={styles.pictureMain}>
                    <img
                        className="card-img picture-main" 
                        style={styles.pictureMain}
                        src={pictureUrl}
                    />
                    <div className="card-img-overlay">
                        <h3 className="title-text card-text">{companyName}</h3>
                        <p className="title-text card-text">{companyType}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const styles = {
    pictureMain: {
        width: 1105,
        height: 650
    }
}