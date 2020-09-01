import React from "react";
import { Link } from "react-router-dom";
import GoogleOAuth from "./GoogleOAuth";

const Header = (props) => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
      <div className="container">
        <h1 className="navbar-brand">Streamy</h1>
        <ul className="navbar-nav">
          <li className="p-20 nav-item">
            <Link to="/" className="nav-link">
              Streams
            </Link>
          </li>
          <li className="nav-item">
            <GoogleOAuth />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
