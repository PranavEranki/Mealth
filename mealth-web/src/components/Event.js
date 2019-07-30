import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
    render() {
        return(
            <div className="Event">
                <div className="row justify-content-center">
                    <div className="event col-6">
                        <h3 className="event-text">{this.props.text}</h3>
                        <h5 className="event-date">Date: {this.props.date.getMonth()+1 +"/"+this.props.date.getDate()+"/"+this.props.date.getFullYear()}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;