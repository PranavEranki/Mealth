import React, { Component } from 'react';
import './Overview.css';
import EmotionPanelContainer from '../containers/EmotionPanelContainer';
import EmotionTotalGraphContainer from '../containers/EmotionTotalGraphContainer';

class Overview extends Component {
    render() {
        return(
            <div className="Overview">
                <div className="row justify-content-center">
                    <h1 className="text-header">Emotions</h1>
                </div>
                <EmotionTotalGraphContainer/>
                <div className="row justify-content-center">
                    <EmotionPanelContainer/>
                </div>
            </div>
        );
    }
}

export default Overview;