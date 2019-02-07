import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager V3.0" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;

/*
- Add active navbar li using state.
*/
