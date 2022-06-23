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
  const [newGif, setNewGif] = useState([]);

  // Renders the entire app on the DOM
  // will move over to index.js
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/search'
    })
      .then((res) => {
        setNewGif(res.data)
        console.log('meta data', res.data);
      })
      .catch((err) => {
        console.log('GET error client side', err);
      })

  }, [])

  return (

    <>
    <Router>

      <Header/>

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
