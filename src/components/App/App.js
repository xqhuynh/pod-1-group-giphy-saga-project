import React from 'react';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';
import Header from '../Header/Header';
import SearchGifs from '../SearchGifs/SearchGifs';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import { Route, HashRouter as Router, Link } from 'react-router-dom';

function App(props) {

  return (
    <>

      <div>
        <h1>Giphy Search!</h1>
      </div>
      <Router>
        <Header />

        <Route path="/api/favorite" exact>
          <FavoriteGifs />
        </Route>

        <Route path="/api/search" exact>
          <SearchGifs />
        </Route>
      </Router>

    </>
  );
}

export default App;
