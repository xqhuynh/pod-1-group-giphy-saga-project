import { useSelector, useDispatch } from "react-redux";

const SearchResultsItem = (gif) => {
    const dispatch = useDispatch();

  function addFavorite() {
      console.log('in addFavorite', gif.gif.id)
    dispatch({
      type: "ADD_FAVORITE",
      payload: gif.gif.id,
    });
  }

  console.log("in SearchResultsItme", gif.gif.images.original.url);
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
