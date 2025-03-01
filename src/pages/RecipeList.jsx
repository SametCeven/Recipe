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
    const selectedRecipe = useSelector(store => store.selectedRecipe)
    
    function handleClick(e) {
        dispatch(creatorSelectRecipe(e.target.value));
    }


    if (recipesLoading) {
        return (
            <div> <Spinner className="text-primary"></Spinner>  Loading...</div>
        )
    }

    return (
        <div className="flex mx-10 my-10">
            <div className="mr-50">
                <h2 className="ml-3 text-header">Recipe List</h2>
                {recipes.map((recipe) => {
                    return (
                        <li className={`list-none text-xs rounded-xl px-3 hover:bg-blue-100 cursor-pointer ${selectedRecipe.id===recipe.id ? "bg-blue-100" : ""}`} onClick={handleClick} key={recipe.id} value={recipe.id}>{recipe.name} </li>
                    )
                })}
            </div>
            <Recipe></Recipe>
        </div>
    )
}