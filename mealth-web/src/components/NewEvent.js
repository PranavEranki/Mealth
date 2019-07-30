import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './Event.css';


class NewEvent extends Component {
    constructor() {
        super();
        this.state={text: "", date: new Date()}
    }

    textHandler(e) {
        this.setState({date: this.state.date, text: e.target.value})
        console.log(this.state.text)
    }

    dateHandler(date) {
        this.setState({text: this.state.text, date: date.value})
        console.log(this.state.date);
    }

    makeEvent() {
        this.props.addEvent(this.state/*{text: this.state.text, date: new Date(this.state.date.getFullYear() +"-"+this.state.date.getMonth()+"-"+this.state.date.getDate())}*/)
    }

    render() {
        return(
            <div className="Event">
                <div className="row justify-content-center">
                    <div className="newevent col-6">
                        <input onChange={this.textHandler.bind(this)} type="text" placeholder="Text description of event..." className="event-text text-input"/>
                        <Dropdown options={this.props.dates} onChange={this.dateHandler.bind(this)} value={"Select a date..."} placeholder="Select an option..."/>
                        <button type="button" className="submit-btn btn btn-primary btn-sm" onClick={this.makeEvent.bind(this)}>Create Event</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewEvent;