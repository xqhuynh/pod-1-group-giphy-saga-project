import { useState } from "react";
import { useDispatch } from "react-redux";

// dispatch action to request gifs from API
function SearchForm() {
  const [searchInput, setNewSearchInput] = useState("");
  const dispatch = useDispatch();

  // function to handle search button w/dispatch action
  // target text input field using evt.target.value
  // payload will be useState
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
      {/* create form, input, button
      handle clicks in form and button tag */}
      <h2>Savon Testing Search Form</h2>
      <form onSubmit={handleSearchClick}>
        {/* set onChange to useState initial value */}
        <input
          type="text"
          placeholder="Search for GIF"
          value={searchInput}
          onChange={(evt) => setNewSearchInput(evt.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </form>
    </>
  );
}

export default SearchForm;
