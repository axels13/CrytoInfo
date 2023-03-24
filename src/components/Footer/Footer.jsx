import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-discord"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
      <div className="footer_conditions">
        <span>
          Privacy <span>Terms of Use</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
