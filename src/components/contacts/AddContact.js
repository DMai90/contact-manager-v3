import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact;
