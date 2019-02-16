import React from 'react';
import Footer from '../layout/Footer';

const About = () => {
  return (
    <React.Fragment>
      <h1 className="display-4">
        <span className="text-danger">About </span>Contact Manager
      </h1>
      <p className="lead mb-0">Simple app to manage contacts.</p>
      <p className="text-secondary">
        Version 3.0. This app is based one of Brad Trversy's React courses then
        modified with additional features.
      </p>
      <h3 className="lead">Technologies Used</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>React Context API</li>
        <li>React-Router-Dom</li>
        <li>Axios</li>
        <li>JSON Placeholder API</li>
        <li>Classnames API</li>
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default About;
