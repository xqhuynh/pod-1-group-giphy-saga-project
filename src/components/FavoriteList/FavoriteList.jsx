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
            <ul>
                {favorites.data && favorites.data.map((fav) => (
                    <>
                        <FavoriteListItems key={fav.id} fav={fav}/>
                    </>
                ))}
            </ul>
        </>
    )
}

export default FavoriteList;