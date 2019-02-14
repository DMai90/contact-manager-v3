import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="d-flex row-hl">
                <div className="item-hl">
                  <h1 className="display-4 mb-2">
                    <span className="text-danger">Contact</span> List
                  </h1>
                </div>
                <div className="item-hl ml-auto pt-3">
                  <Link to="/contact/add">
                    <button className="btn btn-danger">
                      <i className="fas fa-plus" /> Add New Contact
                    </button>
                  </Link>
                </div>
              </div>

              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
