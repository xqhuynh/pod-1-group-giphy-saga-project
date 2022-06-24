import { useDispatch } from "react-redux";
import { useState } from "react";

const FavoriteListItems = ({ fav }) => {
    const [category, setCategory] = useState()
    const dispatch = useDispatch();

    const addCategory = () => {
        if(!category){
            return
        }
        console.log('category is', category)
        dispatch({
            type:'ADD_CATEGORY',
            payload: {category, id: fav.id}
        })
    }


  return (
    <>
      <li className="gif-item" >
        <img className="gif-image" src={fav.images.original.url} />
        <select name="fav-gifs" id="fav-gifs"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            <option value="0">...</option>
            <option value="1">Funny</option>
            <option value="2">Cohort</option>
            <option value="3">Cartoon</option>
            <option value="4">NSFW</option>
            <option value="5">Meme</option>
        </select>
        <button onClick={addCategory}>
            ✅✅✅✅✅✅
        </button>
      </li>
    </>
  );
};

export default FavoriteListItems;
