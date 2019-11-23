import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__item">&copy; 2019 Jonathan Amparo.</div>
        <div className="footer__item">
          <div className="footer__contact">
            Email:{" "}
            <a href="mailto:jonathanmamparo@gmail.com" className="footer__link">
              jonathanmamparo@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
