import React, { Component } from 'react';
import Event from './Event';
import './EventList.css';

class EventList extends Component {
    render() {
        return(
            <div className="EventList">
                <div className="row justify-content-center">
                    <h1 className="text-header">Life Events</h1>
                </div>
                {this.props.events.map(e => {
                    return (<Event {...e}/>);
                })}
            </div>
        );
    }
}

export default EventList;