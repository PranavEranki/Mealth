import React, { Component } from 'react';
import './Overview.css';
import Chart from 'chart.js';

class EmotionTotalGraph extends Component {
    constructor() {
        super();
        this.state={cref: null};
    }
    componentDidMount() {
        var ctx = document.getElementById("radar").getContext("2d");
        var data = {
            labels: ["Happiness", "Sadness", "Love", "Worry", "Hate"],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "rgba(255,244,188,0.3)",
                    strokeColor: "rgba(255,140,76,1)",
                    pointColor: "rgba(255,140,76,1)",
                    pointStrokeColor: "rgba(22,10,71,1)",
                    pointHighlightFill: "rgba(255, 244, 188,1)",
                    pointHighlightStroke: "rgba(255,140,76,1)",
                    data: [this.props.emoscore.happy, this.props.emoscore.sad, this.props.emoscore.love, this.props.emoscore.worry, this.props.emoscore.hate]
                }
            ]
        };

        this.setState({cref: new Chart(ctx).Radar(data, {})});
    }

    componentDidUpdate() {
        if (this.props.rerender) {
            this.state.cref.destroy();
            var ctx = document.getElementById("radar").getContext("2d");
            var data = {
                labels: ["Happiness", "Sadness", "Love", "Worry", "Hate"],
                datasets: [
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(255,244,188,0.3)",
                        strokeColor: "rgba(255,140,76,1)",
                        pointColor: "rgba(255,140,76,1)",
                        pointStrokeColor: "rgba(22,10,71,1)",
                        pointHighlightFill: "rgba(255, 244, 188,1)",
                        pointHighlightStroke: "rgba(255,140,76,1)",
                        data: [this.props.emoscore.happy, this.props.emoscore.sad, this.props.emoscore.love, this.props.emoscore.worry, this.props.emoscore.hate]
                    }
                ]
            };
    
            this.setState({cref: new Chart(ctx).Radar(data, {})});

            this.props.toggleRender();
        }
    }

    render() {
        return(
            <div className="EmotionTotalGraph">
                <div className="row justify-content-center">
                    <canvas id="radar" width="500px" height="500px"></canvas>
                </div>
            </div>
        );
    }
}

export default EmotionTotalGraph;