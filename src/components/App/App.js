import React from 'react';

import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';


import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


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
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <FavoriteGifs />

    </>

    <div>
    </div>

  );
}

export default App;
