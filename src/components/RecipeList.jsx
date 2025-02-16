import { useDispatch, useSelector } from "react-redux"
import { creatorSelectRecipe } from "../store/actions/action"

export default function Sidebar() {
    const recipes = useSelector(store => store.recipes)
    const dispatch = useDispatch();
    function handleClick(e) {
        dispatch(creatorSelectRecipe(e.target.value));
    }

    return (
        <div>
            <h2>Recipe List</h2>
            <form>
                {recipes.map((recipe) => {
                    return (
                        <li onClick={handleClick} key={recipe.id} value={recipe.id}>{recipe.name} </li>
                    )
                })}
            </form>
        </div>
    )
}