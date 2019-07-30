import React, { Component } from 'react';
import './Overview.css';
import Chart from 'chart.js';

class EmotionTimeGraph extends Component {
    constructor() {
        super();
        this.state={cref: null}
    }
    componentDidMount() {
        var ctx = document.getElementById("LineWithLine").getContext("2d");
        var data = {
            labels: this.props.labels,
            datasets: [{
                label: "happy",
                fillColor: "rgba(253,212,120,0.2)",
			    strokeColor: "rgba(253,212,120,1)",
			    pointColor: "rgba(253,212,120,1)",
			    pointStrokeColor: "#fff",
			    pointHighlightFill: "#fff",
			    pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.props.scores.happyscores
            },
            {
                label: "worry",
                fillColor: "rgba(171,117,143,0.2)",
			    strokeColor: "rgba(171,117,143,1)",
			    pointColor: "rgba(171,117,143,1)",
			    pointStrokeColor: "#fff",
			    pointHighlightFill: "#fff",
			    pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.props.scores.worryscores
            },
            {
                label: "love",
                fillColor: "rgba(181,46,63,0.2)",
			    strokeColor: "rgba(181,46,63,1)",
			    pointColor: "rgba(181,46,63,1)",
			    pointStrokeColor: "#fff",
			    pointHighlightFill: "#fff",
			    pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.props.scores.lovescores
            },
            {
                label: "sad",
                fillColor: "rgba(174,189,211,0.2)",
			    strokeColor: "rgba(174,189,211,1)",
			    pointColor: "rgba(174,189,211,1)",
			    pointStrokeColor: "#fff",
			    pointHighlightFill: "#fff",
			    pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.props.scores.sadscores
            },
            {
                label: "hate",
                fillColor: "rgba(69,57,90,0.2)",
			    strokeColor: "rgba(69,57,90,1)",
			    pointColor: "rgba(69,57,90,1)",
			    pointStrokeColor: "#fff",
			    pointHighlightFill: "#fff",
			    pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.props.scores.hatescores
            },
        ]
        };

        Chart.types.Line.extend({
            name: "LineWithLine",
            draw: function () {
                Chart.types.Line.prototype.draw.apply(this, arguments);

                for (var ind of this.options.lineIndices) {
                    var point = this.datasets[0].points[ind]
                    var scale = this.scale
            
                    // draw line
                    this.chart.ctx.beginPath();
                    this.chart.ctx.moveTo(point.x, scale.startPoint + 24);
                    this.chart.ctx.strokeStyle = '#ff0000';
                    this.chart.ctx.lineTo(point.x, scale.endPoint);
                    this.chart.ctx.stroke();
            
                    // write EVENT
                    this.chart.ctx.textAlign = 'center';
                    this.chart.ctx.fillText("EVENT", point.x, scale.startPoint + 12);
                }
            }
        });
        
        this.setState({cref: new Chart(ctx).LineWithLine(data, {
            datasetFill : false,
            lineIndices: this.props.lineNums,
            bezierCurve : true
        })});
    }

    componentDidUpdate() {
        if (this.props.rerender) {
            this.state.cref.destroy();
            var ctx = document.getElementById("LineWithLine").getContext("2d");
            var data = {
                labels: this.props.labels,
                datasets: [{
                    label: "happy",
                    fillColor: "rgba(253,212,120,0.2)",
                    strokeColor: "rgba(253,212,120,1)",
                    pointColor: "rgba(253,212,120,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.scores.happyscores
                },
                {
                    label: "worry",
                    fillColor: "rgba(171,117,143,0.2)",
                    strokeColor: "rgba(171,117,143,1)",
                    pointColor: "rgba(171,117,143,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.scores.worryscores
                },
                {
                    label: "love",
                    fillColor: "rgba(181,46,63,0.2)",
                    strokeColor: "rgba(181,46,63,1)",
                    pointColor: "rgba(181,46,63,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.scores.lovescores
                },
                {
                    label: "sad",
                    fillColor: "rgba(174,189,211,0.2)",
                    strokeColor: "rgba(174,189,211,1)",
                    pointColor: "rgba(174,189,211,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.scores.sadscores
                },
                {
                    label: "hate",
                    fillColor: "rgba(69,57,90,0.2)",
                    strokeColor: "rgba(69,57,90,1)",
                    pointColor: "rgba(69,57,90,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.scores.hatescores
                },
            ]
            };
    
            Chart.types.Line.extend({
                name: "LineWithLine",
                draw: function () {
                    Chart.types.Line.prototype.draw.apply(this, arguments);
    
                    for (var ind of this.options.lineIndices) {
                        if (ind >= 0) {
                            var point = this.datasets[0].points[ind]
                            var scale = this.scale
                    
                            // draw line
                            this.chart.ctx.beginPath();
                            this.chart.ctx.moveTo(point.x, scale.startPoint + 24);
                            this.chart.ctx.strokeStyle = '#ff0000';
                            this.chart.ctx.lineTo(point.x, scale.endPoint);
                            this.chart.ctx.stroke();
                    
                            // write EVENT
                            this.chart.ctx.textAlign = 'center';
                            this.chart.ctx.fillText("EVENT", point.x, scale.startPoint + 12);
                        }
                    }
                }
            });
            
            this.setState({cref: new Chart(ctx).LineWithLine(data, {
                datasetFill : false,
                lineIndices: this.props.lineNums,
                bezierCurve : true
            })});

            this.props.toggleRender()
        }
    }

    render() {
        return(
            <div className="EmotionTimeGraph">
                <div className="row justify-content-center">
                    <h1 className="text-header">Timeline</h1>
                </div>
                <div className="row justify-content-center">
                    <canvas id="LineWithLine" width="1200px" height="500px"></canvas>
                </div>
            </div>
        );
    }
}

export default EmotionTimeGraph;