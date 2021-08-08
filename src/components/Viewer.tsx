import React from 'react'
import '../styling/Viewer.css';
import { Component } from 'react';

class Viewer extends Component {
    render() {
        return (
            <div className="Viewer">
                <div className="container">
                    canvas container
                    <div className="canvas">
                        canvas element
                    </div>
                </div>
            </div>
        )
    }
}

export default Viewer;
