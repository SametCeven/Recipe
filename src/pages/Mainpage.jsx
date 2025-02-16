import { useDispatch,useSelector } from "react-redux"
import Recipe from "../components/Recipe"
import RecipeList from "../components/RecipeList"
import { useEffect } from "react"
import { getAllRecipesApi } from "../store/actions/action";
import Header from "../components/Header";
export default function Mainpage(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRecipesApi())
    }, [])
    
    return(
        <div>
            <Header></Header>
            <div className="flex gap-5 mx-5">
                <RecipeList/>
                <Recipe/>
            </div>
        </div>
    )
}