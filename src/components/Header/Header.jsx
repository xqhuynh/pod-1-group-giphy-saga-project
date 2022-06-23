import React from 'react';

function Header() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <span>
          <a href='/api/search'>Search Gifs</a>
          <a href='/api/favorite'>View Favorites</a>
      </span>
    </div>
  );
}

export default Header;
