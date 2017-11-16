import React from 'react';

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
        <div className="img-preview card bg-dark text-white">
            <img
                className="card-img" 
                style={styles.pictureMain}
                src={pictureUrl}
            />
            <div className="card-img-overlay">
                <h3 className="title-text card-title">{companyName}</h3>
                <p className="title-text card-text">{companyType}</p>
            </div>
        </div>
    )
}


const styles = {
    pictureMain: {
        width: 900,
        height: 500
    }
}