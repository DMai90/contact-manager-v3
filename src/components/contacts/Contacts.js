import React, { Component } from 'react';
import Contact from './Contact';
import AddContactModal from '../modals/AddContactModal';
import { Consumer } from '../../context';

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
                  <button
                    className="btn btn-danger"
                    data-toggle="modal"
                    data-target="#contactModal"
                  >
                    <i className="fas fa-plus" /> Add New Contact
                  </button>
                  <AddContactModal />
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
