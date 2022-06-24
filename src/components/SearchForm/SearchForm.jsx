import { useState } from "react";
import { useDispatch } from "react-redux";

// dispatch action to request gifs from API
function SearchForm() {
  const [searchInput, setNewSearchInput] = useState("");
  const dispatch = useDispatch();

  // function to handle search button w/dispatch action
  // target text input field using evt.target.value
  const handleSearchClick = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "FETCH_RESULTS",
      payload: searchInput,
    });
    // Clear search input box after button clicked
    setNewSearchInput("");
  };

  return (
    <>
      <h2>Testing Search Gifs component</h2>
      <form onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="What to search for?"
          value={searchInput}
          onChange={(evt) => setNewSearchInput(evt.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </form>
    </>
  );
}

export default SearchForm;
