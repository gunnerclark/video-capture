import { NONAME } from 'dns';
import React from 'react'
import { Component } from 'react';

class Buttons extends Component {
    render() {
        const tempHide = {
            display: 'none'
        }
        return (
            <div className="Buttons">
                <div className="container">
                    buttons title
                    <div className="actions">
                        <button>start recording</button>
                        <button style={ tempHide }>pause recording</button>
                        <button>start streaming</button>
                        <button>start virtual camera?</button>
                        <input />
                        <button>save stream key</button>
                        <input />
                        <button>search file path</button>
                        <button>exit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buttons;
