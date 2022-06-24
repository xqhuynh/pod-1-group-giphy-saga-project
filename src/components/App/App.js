import React from 'react';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

import { Route, HashRouter as Router, Link } from 'react-router-dom';


function App(props) {
  const dispatch = useDispatch();

  // useEffect to render on page load
  // also useful to see console for debugging on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_RESULTS",
      payload: 'search-input'
    })
  }, []);

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
        </Route>
      </Router>

    </>
  );
}

export default App;
