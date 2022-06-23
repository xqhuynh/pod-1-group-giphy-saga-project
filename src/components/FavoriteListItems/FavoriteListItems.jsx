const FavoriteListItems = ({ fav }) => {


    return (
        <>
            <li>{fav.data.data.images.url}<input type="dropdown"  /></li>
            
        </>
    )
}

export default FavoriteListItems;