const SearchResultsItem = (gif) => {
  function addFavorite() {
    dispatch({
      type: "ADD_FAVORITE",
      payload: gif.id,
    });
  }
  console.log('in SearchResultsItme', gif.gif.images.original.url)
  return (
    <>
      <div className="gif-item">
        <img src={gif.gif.images.original.url} className="gif-image" />
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
