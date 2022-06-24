import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function Header() {
  return (
    <div className="page_header">
      <h1 className="search-header">Giphy Search!</h1>

      <div className="nav-container">
        <span className="nav-links">
          <a href="/#api/search" className="nav-link">
            Search Gifs
          </a>

          <a href="/#api/favorite" className="nav-link">
            View Favorites
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
