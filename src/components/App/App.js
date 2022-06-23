import React from 'react';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';
import SearchGifs from '../SearchGifs/SearchGifs';
import { useState } from 'react';

function App(props) {

  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <FavoriteGifs />
      <SearchGifs />

    </>
  );
}

export default App;
