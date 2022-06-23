import FavoriteListItems from "../FavoriteListItems/FavoriteListItems";
import { useSelector } from "react-redux";


const FavoriteList = () => {
    const favorites = useSelector(store => store.favorites)


    return (
        <>
            {favorites.data && favorites.map((fav) => (
                <FavoriteListItems fav={fav}/>
            ))}
           
        </>
    )
}

export default FavoriteList;