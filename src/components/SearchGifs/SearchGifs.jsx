import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

// Renders the entire app on the DOM
// will move over to index.js
function SearchGifs() {
  const [newGif, setNewGif] = useState();
  const dispatch = useDispatch();
  dispatch({
    type: "SET_ELEMENTS",
    payload: newGif,
  });
  useEffect(() => {}, []);

  return (
    <>
      <h2>Testing Search Gifs component</h2>
    </>
  );
}

export default SearchGifs;
