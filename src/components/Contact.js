import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = e => {
    console.log(e);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card mb-3">
        <h4 className="card-header">
          {name}{' '}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
