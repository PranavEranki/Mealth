import React, { Component } from 'react';
import './EmotionRing.css';

class EmotionRing extends Component {
    render() {
        return(
            <div className="EmotionRing col">
                <div className={this.props.ring + " ring"}>
                    <h1 className="emoscore">{this.props.score}</h1>
                </div>
                <h5 className={"ringName " + this.props.ring}>{this.props.name}</h5>
            </div>
        );
    }
}

export default EmotionRing;