import React from 'react';

function Header() {
  return (
    <div className='page_header'>
      <h1>Giphy Search!</h1>

      <span>
          <a href='/api/search' className='nav_link'>Search Gifs</a>
               
          <a href='/api/favorite' className='nav_link'>View Favorites</a>
      </span>
    </div>
  );
}

export default Header;
