import React from "react";

import "./Footer.scss";

const Footer: React.FC<any> = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <p>
            Powered By <a href="#">Pharma Test</a>
          </p>
          <p>Quick.src 2021</p>
          <p>
            <a href="#">Terms & conditions</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
