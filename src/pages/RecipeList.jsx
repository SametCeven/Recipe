import { useDispatch, useSelector } from "react-redux"
import { creatorSelectRecipe, getAllRecipesApi } from "../store/actions/action"
import { Spinner } from "reactstrap"
import { useEffect } from "react"
import Recipe from "../components/Recipe";

export default function Sidebar() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRecipesApi())
    }, [])
    const recipes = useSelector(store => store.recipes)
    const recipesLoading = useSelector(store => store.recipesLoading)
    function handleClick(e) {
        dispatch(creatorSelectRecipe(e.target.value));
    }


    if (recipesLoading) {
        return (
            <div> <Spinner className="text-primary"></Spinner>  Loading...</div>
        )
    }

    return (
        <div className="flex justify-around gap-10 mx-10">
            <div>
                <h2 className="ml-4">Recipe List</h2>
                {recipes.map((recipe) => {
                    return (
                        <li className="list-none rounded-xl px-3 hover:bg-blue-100 cursor-pointer" onClick={handleClick} key={recipe.id} value={recipe.id}>{recipe.name} </li>
                    )
                })}
            </div>
            <Recipe></Recipe>
        </div>
    )
}