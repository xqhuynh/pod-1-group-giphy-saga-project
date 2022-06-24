import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import { useSelector } from "react-redux";

const SearchResultsList = () => {

  const searchResults = useSelector((store) => store.search);

  return (
    <>
      {/* need to add return statement after mapping */}
      <div className="gif-list">
        {searchResults.map((gif) => (
          <SearchResultsItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  );
};

export default SearchResultsList;
