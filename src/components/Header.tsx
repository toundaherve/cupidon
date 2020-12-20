import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul className="navigation">
        <li className="navigation-item">
          <Link to="/">My Matches</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
