import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        placeholder="Enter Name..."
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Email</span>
                      </div>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Phone</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="phone"
                        placeholder="Enter Phone..."
                        value={phone}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="btn btn-block btn-light"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
