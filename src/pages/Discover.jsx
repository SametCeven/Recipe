import { useDispatch, useSelector } from "react-redux"
import { creatorSelectRecipe, getLimitedRecipesApi } from "../store/actions/action";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Discover() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getLimitedRecipesApi())
    }, [])

    const recipes = useSelector(store => store.recipes)

    function handleClick(e) {
        const id = Number(e.target.getAttribute("value"))
        dispatch(creatorSelectRecipe(id))
        history.push("/recipelist")
    }

    return (
        <div className="flex flex-wrap justify-center gap-y-10 my-15">
            {recipes.map((recipe) =>
                <div className="w-[30%] flex flex-col justify-center items-center gap-4 border-1 rounded-3xl p-2 mx-2 hover:cursor-pointer" key={recipe.id} onClick={handleClick} value={recipe.id} >
                    <span className="text-secondary text-xl font-bold" key={recipe.name} value={recipe.id}> {recipe.name} </span>
                    <img className="w-50 rounded-4xl" key={recipe.image} src={recipe.image} alt={recipe.name} value={recipe.id}></img>
                    <div className="flex gap-30 text-xs" key={recipe.id} value={recipe.id}>
                        <span key={recipe.cuisine} value={recipe.id} > {recipe.cuisine} </span>
                        <span key={recipe.rating} value={recipe.id}> {recipe.rating} </span>
                    </div>

                </div>
            )}

        </div>
    )
} 