import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div id="homePage">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-4">
              Keep track of the ones that matter the most
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda fugit nostrum cumque amet eius distinctio blanditiis
              ratione deserunt nihil odio!
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
    </div>
  );
};

export default HomePage;
