import React from 'react';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Header() {
  return (
    <div className='page_header'>
      <h1>Giphy Search!</h1>

      <span className='nav_links'>
          <a href='/#api/search' className='nav_link'>Search Gifs</a>
               
          <a href='/#api/favorite' className='nav_link'>View Favorites</a>
      </span>
    </div>
  );
}

export default Header;
