import React from 'react'
import '../styling/Dock.css';
import { Component } from 'react';
import Scenes from './dock/Scenes';
import Sources from './dock/Sources';
import Mixer from './dock/Mixer';
import Buttons from './dock/Buttons';

class Dock extends Component {
    handleClick = () => {
        console.log('Click happened');
    }
    render() {
        return (
            <div className="Dock">
                <Scenes />
                <Sources />
                <Mixer />
                <Buttons />
            </div>
        )
    }
}

export default Dock;
