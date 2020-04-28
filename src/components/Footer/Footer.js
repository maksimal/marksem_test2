import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="links-wrapper">
        <div className="logo-wrapper">
          <div className="logo">
            <Link to={"/"}>marksem.</Link>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
              laboriosam rem dicta voluptate possimus.
            </p>
          </div>
        </div>
        <div className="links-section">
          <Link to={"/whymarksem"} className="title-links">
            why marksem
          </Link>
          <Link to={"/whymarksem"}>About</Link>
          <Link to={"/whymarksem"}>Terms of cooperation</Link>
          <Link to={"/whymarksem"}>Career opportunities</Link>
        </div>
        <div className="links-section">
          <Link to={"/houses"} className="title-links">
            houses
          </Link>
          <Link to={"/houses"}>Mobile houses</Link>
          <Link to={"/houses"}>Module houses</Link>
          <Link to={"/houses"}>Houseboats</Link>
          <Link to={"/houses"}>Locations</Link>
        </div>
        <div className="links-section">
          <Link to={"/investments"} className="title-links">
            investments
          </Link>
          <Link to={"/investments"}>Investment plans</Link>
          <Link to={"/investments"}>Investment calculator</Link>
          <Link to={"/investments"}>Projects</Link>
          <Link to={"/investments"}>Hotel services</Link>
        </div>
        <div className="links-section">
          <Link to={"/contacts"} className="title-links">
            contacts
          </Link>
          <Link to={"/contacts"}>Collaboration</Link>
          <Link to={"/contacts"}>Contact us</Link>
          <Link to={"/contacts"}>FAQs</Link>
        </div>
        <ul className="social-list">
          <li>
            <a href="#">
              <svg width="11" height="20">
                <use href="./icons-sprite.svg#icon-facebook" />
              </svg>
              {/* <img src="./img/social-icons/facebook.svg" alt="facebook social"></img> */}
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="19" height="20">
                <use href="./icons-sprite.svg#icon-linkedin" />
              </svg>
              {/* <img src="./img/social-icons/linkedin.svg" alt="facebook social"></img> */}
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="20" height="17">
                <use href="./icons-sprite.svg#icon-twitter" />
              </svg>
              {/* <img src="./img/social-icons/twitter.svg" alt="facebook social"></img> */}
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="23" height="17">
                <use href="./icons-sprite.svg#icon-youtube" />
              </svg>
              {/* <img src="./img/social-icons/youtube.svg" alt="facebook social"></img> */}
            </a>
          </li>
        </ul>
      </div>
      <div className="credentials-wrapper">
        <p className="credentials-text">
          COPYRIGHT © 2020 MARKSEM. ALL RIGHTS RESERVED.
        </p>
        <div className="credentials-links">
          <a href="#">cookies policy</a>
          <div className="separator"></div>
          <a href="#">privacy policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//
