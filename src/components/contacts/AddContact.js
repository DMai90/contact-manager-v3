import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
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
              />
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-block btn-light"
            value="Submit"
          />
        </div>
      </div>
    );
  }
}

export default AddContact;
