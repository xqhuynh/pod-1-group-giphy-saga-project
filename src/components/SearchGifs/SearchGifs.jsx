import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

// dispatch action to request gifs from API
function SearchGifs() {
  const [newGif, setNewGif] = useState();
  const dispatch = useDispatch();
  dispatch({
    type: "SET_GIF_RESULTS",
    payload: newGif,
  });
  useEffect(() => {}, []);

  return (
    <>
      <h2>Testing Search Gifs component</h2>
      <form>
        <input />
        <button></button>
      </form>
    </>
  );
}

export default SearchGifs;
