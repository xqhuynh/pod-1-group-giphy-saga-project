import FavoriteListItems from "../FavoriteListItems/FavoriteListItems";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


const FavoriteList = () => {
    useEffect(() => {
        getFavs();
    }, [])

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites)

    const getFavs = () => {
        dispatch({
            type: 'GET_FAVORITE_GIFS'
        })
    }


    return (
        <>
            <ul className="gif-list">
                {favorites.data && favorites.data.map((fav, i) => (
                    <>
                        <FavoriteListItems key={fav.id & i} fav={fav}/>
                        {console.log('in fav list item', fav.id)}
                    </>
                ))}
            </ul>
        </>
    )
}

export default FavoriteList;