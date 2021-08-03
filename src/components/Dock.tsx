import React from 'react'
import '../styling/Dock.css';
import { Component } from 'react';
import Scenes from './dock/Scenes';
import VideoSources from './dock/VideoSources';
import AudioSources from './dock/AudioSources';
import Buttons from './dock/Buttons';

class Dock extends Component {
    handleClick = () => {
        console.log('Click happened');
    }
    render() {
        return (
            <div className="Dock">
                <button onClick={this.handleClick}>test</button>
                <Scenes />
                <VideoSources />
                <AudioSources />
                <Buttons />
            </div>
        )
    }
}

export default Dock;
