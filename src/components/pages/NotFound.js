import React from 'react';

const NotFound = () => {
  return (
    <React.Fragment>
      <h1 className="display-4">
        <span className="text-danger">
          <i className="far fa-frown" /> 404
        </span>{' '}
        Page Not Found
      </h1>
      <p className="lead">Sorry, that page does not exist</p>
    </React.Fragment>
  );
};

export default NotFound;
