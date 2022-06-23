import FavoriteListItems from "../FavoriteListItems/FavoriteListItems";
import { useSelector } from "react-redux";


const FavoriteList = () => {
    const favorites = useSelector(store => store.favorites)


    return (
        <>
            <select name="fav-gifs" id="fav-gifs">
                <option value=""></option>
            </select>
            {favorites.data && favorites.map((fav) => (
                <FavoriteListItems fav={fav}/>
            ))}
           
        </>
    )
}

export default FavoriteList;