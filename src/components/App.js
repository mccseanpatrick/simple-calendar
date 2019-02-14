import React, { Component } from 'react';
import '../styles/App.css';
import Calendar from './calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
