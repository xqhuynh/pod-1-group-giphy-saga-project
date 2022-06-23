import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';
import { useSelector } from "react-redux";

const SearchResultsList = () => {

    const searchResults = useSelector(store => store.search)

    return (
        <>
            <div className='gif-list'>
                {searchResults.map((gif) =>
                    <SearchResultsItem gif={gif} />
                )}
            </div>
        </>
    )
}

export default SearchResultsList;