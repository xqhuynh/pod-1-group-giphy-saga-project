import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App(props) {
  const [newGif, setNewGif] = useState([]);

  // Renders the entire app on the DOM
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
    <div>
    </div>
  );
}

export default App;
