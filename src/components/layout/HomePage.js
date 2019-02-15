import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div id="homePage">
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-4">
            Keep track of the ones that matter the most
          </h1>
          <p className="lead">
            Contact Manager helps you keep a detailed listing of the people
            close to you. Never again forget someone's contact information. Give
            it a try!
          </p>
        </div>

        <div className="col-md-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h3 className="text-center">
                Start remembering before it's too late
              </h3>
              <p className="lead" />
              <Link to="/contactlist">
                <button className="btn btn-block btn-outline-light">
                  Start keeping track <strong>now</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
