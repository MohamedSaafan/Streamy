import React from "react";
import { Link } from "react-router-dom";
import GoogleOAuth from "./GoogleOAuth";

const Header = (props) => {
  return (
    <nav className="">
      <div className="nav d-flex align-items-baseline justify-content-between container">
        <h1>Streamy</h1>
        <ul className="list-unstyled d-flex ml-5 h1 justify-content-between w-50">
          <li className="p-20">
            <Link to="/">Streams</Link>
          </li>
          <li>
            <GoogleOAuth />
          </li>
        </ul>
      </div>
      <hr className="container" />
    </nav>
  );
};
export default Header;
