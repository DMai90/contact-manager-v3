import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2" id="nav-home">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-home" /> Home
              </NavLink>
            </li>
            <li className="nav-item px-2" id="nav-contactlist">
              <NavLink
                exact
                to="/contactlist"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-address-book" /> Contact List
              </NavLink>
            </li>
            <li className="nav-item px-2" id="nav-about">
              <NavLink
                exact
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-question" /> About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
