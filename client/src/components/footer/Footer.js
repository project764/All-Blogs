import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="desktop-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul>
            <li>
              <a href="https://instagram.com/ordinarybutsmart/" className="subfot">Instagram</a>
            </li>
            <li>
              <a href="https://facebook.com/" className="subfot">FaceBook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
