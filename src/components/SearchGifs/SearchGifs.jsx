import { useState, useEffect } from "react";
import axios from "axios";

// Renders the entire app on the DOM
// will move over to index.js
function SearchGifs() {
  const [newGif, setNewGif] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/search",
    })
      .then((res) => {
        setNewGif(res.data);
        console.log("meta data", res.data);
      })
      .catch((err) => {
        console.log("GET error client side", err);
      });
  }, []);

  return (
    <>
      <h2>Testing Search Gifs component</h2>
      <h3></h3>
    </>
  );
}

export default SearchGifs;
