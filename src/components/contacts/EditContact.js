import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
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

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const { name, email, phone } = res.data;
    const { street, suite, city, zipcode } = res.data.address;

    this.setState({
      name,
      address: {
        street,
        suite,
        city,
        zipcode
      },
      email,
      phone
    });
  }

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

    const updContact = {
      name,
      address: {
        street,
        suite,
        city,
        zipcode
      },
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // Clear State
    this.setState({
      name: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      email: '',
      phone: '',
      errors: {}
    });

    // Redirect
    this.props.history.push('/contactlist');
  };

  render() {
    const { name, email, phone, errors } = this.state;
    const { street, suite, city, zipcode } = this.state.address;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Edit </span>Contact
              </h1>
              <div className="card mb-3">
                <h4 className="card-header">Contact Information</h4>
                <div className="card-body">
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
                      className="btn btn-block btn-light"
                      value="Update Contact"
                    />
                  </form>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
