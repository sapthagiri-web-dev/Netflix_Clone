import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  console.log(show);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="netflix-logo.jpg" alt="Netflix Logo" />
      <img src="signUp.png" alt="Sign Up Logo" className="sign__up" />
    </div>
  );
}

export default Nav;
