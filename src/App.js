import React, { Component } from 'react';
import Header from './components/layout/Header';
import HomePage from './components/layout/HomePage';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/contactlist" component={Contacts} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
