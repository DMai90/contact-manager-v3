import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContactModal extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check Input Fields
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });
    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="modal fade" id="contactModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-danger text-white">
                    <h4 className="modal-title">Add New Contact</h4>
                    <button className="close" data-dismiss="modal">
                      <i className="fas fa-times fa-sm" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <TextInputGroup
                        prepend="Name"
                        name="name"
                        placeholder="Enter Name..."
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                      />

                      <TextInputGroup
                        prepend="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                      />

                      <TextInputGroup
                        prepend="Phone"
                        name="phone"
                        placeholder="Enter Phone..."
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                      />

                      <input
                        type="submit"
                        className="btn btn-block btn-light"
                        value="Submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContactModal;
