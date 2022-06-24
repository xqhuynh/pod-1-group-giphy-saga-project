const SearchResultsItem = () => {
  function addFavorite() {
    dispatch({
      type: "ADD_FAVORITE",
      payload: gif.id,
    });
  }

  return (
    <>
      <div className="gif-item">
        <img src={gif.images.fixed_height.url} className="gif-image" />
        <div>
          <button className="favorite-button" onClick={addFavorite}>
            ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchResultsItem;
