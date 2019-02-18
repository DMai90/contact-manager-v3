import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContactModal extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    },
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onChangeAddress = e =>
    this.setState({
      address: { ...this.state.address, [e.target.name]: e.target.value }
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const { street, suite, city, zipcode } = this.state.address;

    // Check Input Fields
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (street === '') {
      this.setState({ errors: { street: 'Street is required' } });
      return;
    }
    if (suite === '') {
      this.setState({ errors: { suite: 'Suite is required' } });
      return;
    }
    if (city === '') {
      this.setState({ errors: { city: 'City is required' } });
      return;
    }
    if (zipcode === '') {
      this.setState({ errors: { zipcode: 'Zip code is required' } });
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
      phone,
      address: {
        street,
        suite,
        city,
        zipcode
      }
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    document.getElementById('modalBtn').click();
    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      errors: {}
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    const { street, suite, city, zipcode } = this.state.address;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="modal fade" id="contactModal">
              <div className="modal-dialog modal-lg">
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
                        prepend="Street"
                        name="street"
                        placeholder="Enter Street..."
                        value={street}
                        onChange={this.onChangeAddress}
                        error={errors.street}
                      />

                      <TextInputGroup
                        prepend="Suite"
                        name="suite"
                        placeholder="Enter Suite..."
                        value={suite}
                        onChange={this.onChangeAddress}
                        error={errors.suite}
                      />

                      <TextInputGroup
                        prepend="City"
                        name="city"
                        placeholder="Enter City..."
                        value={city}
                        onChange={this.onChangeAddress}
                        error={errors.city}
                      />

                      <TextInputGroup
                        prepend="Zip Code"
                        name="zipcode"
                        placeholder="Enter Zip Code..."
                        value={zipcode}
                        onChange={this.onChangeAddress}
                        error={errors.zipcode}
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
                        className="btn btn-block btn-outline-danger"
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
