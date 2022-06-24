import React from 'react';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';

function App(props) {

  return (
    <>
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
