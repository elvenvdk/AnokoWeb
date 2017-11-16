import React from 'react';

export const PageHeader = (props) => {
    const { title, blurb, backgroundImage } = props;
    return (
        <div className="pageTop card bg-dark text-white">
            <img className="card-img" src={backgroundImage} alt="Card image" />
            <div className="card-img-overlay screen-header">
                <h2 className="title-text card-title">{title}</h2>
                <p className="title-text card-text">{blurb}</p>
            </div>
        </div>
    )
}
