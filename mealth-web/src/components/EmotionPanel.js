import React, { Component } from 'react';
import EmotionRing from './EmotionRing';
import './EmotionPanel.css';

const happy = {
    name: "Happiness",
    ring: "happy"
}

const love = {
    name: "Love",
    ring: "love"
}

const sad = {
    name: "Sadness",
    ring: "sad"
}

const worry = {
    name: "Worry",
    ring: "worry"
}

const hate = {
    name: "Hate",
    ring: "hate"
}

class EmotionPanel extends Component {
    render() {
        return(
            <div className="EmotionPanel row justify-content-center">
                <EmotionRing score={this.props.emoscore.love} {...love}/>
                <EmotionRing score={this.props.emoscore.happy} {...happy}/>
                <EmotionRing score={this.props.emoscore.sad} {...sad}/>
                <EmotionRing score={this.props.emoscore.worry} {...worry}/>
                <EmotionRing score={this.props.emoscore.hate} {...hate}/>
            </div>
        );
    }
}

export default EmotionPanel;