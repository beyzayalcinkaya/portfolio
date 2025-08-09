import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop"></div>
      <hr />
      <div className="footerButtom">
        <p>© 2025 Beyza Yalçınkaya. All rights reserved.</p>
        <div className="footerBottomRight">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
