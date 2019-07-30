import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Overview from './components/Overview';
import EmotionTimeGraphContainer from './containers/EmotionTimeGraphContainer';
import Footer from './components/Footer';
import EventListContainer from './containers/EventListContainer';
import NewEventContainer from './containers/NewEventContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container-fluid">
          <Overview/>
          <EmotionTimeGraphContainer/>
          <EventListContainer/>
          <NewEventContainer/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
