import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center mt-5">
      <div className="d-flex justify-content-center row-hl">
        <div className="p-4 item-hl">
          <strong>David Mai</strong>
        </div>
        <div className="p-4 item-hl">
          <a
            href="https://www.linkedin.com/in/nldavidmai/"
            className="text-dark"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div className="p-4 item-hl">
          <a href="https://github.com/DevMai90" className="text-dark">
            <i className="fab fa-github" />
          </a>
        </div>
        <div className="p-4 item-hl">
          <a href="https://twitter.com/devmai90" className="text-dark">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
