const FavoriteListItems = ({ fav }) => {

    return (
        <>   hi
            <li><img src={fav.images.original.url} /> 
                <select name="fav-gifs" id="fav-gifs">
                    <option value="1">Funny</option>
                    <option value="2">Cohort</option>
                    <option value="3">Cartoon</option>
                    <option value="4">NSFW</option>
                    <option value="5">Meme</option>
                </select>
            </li>
            
        </>
    )
}


export default FavoriteListItems;
