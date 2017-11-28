import React, { Component } from 'react';


export default class VideoSreen extends Component {
    render() {
        return (
            <div className="landing1-video-container">
                <iframe 
                    src="https://www.youtube.com/embed/4YejKlk5vYs?wmode=opaque&controls=0&showinfo=0"
                    frameborder="0" 
                    allowfullscreen="1">
                </iframe>
            </div>
        )
    }
}

// controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=eOGVq3wbpYI