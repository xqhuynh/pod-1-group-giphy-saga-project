import React from 'react';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';
import SearchForm from '../SearchForm/SearchForm';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import Header from '../Header/Header';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
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
          <SearchForm />
          <SearchResultsList />
        </Route>
      </Router>

    </>
  );
}

export default App;
