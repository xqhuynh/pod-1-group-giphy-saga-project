
const FavoriteListItems = () => {
  return <>Testing List Items</>;
};

export default FavoriteListItems;



const FavoriteListItems = ({ fav }) => {


    return (
        <>
            <li><img src={fav.data.data.images.url} /> 
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

