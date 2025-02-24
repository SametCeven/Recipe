import { useDispatch, useSelector } from "react-redux"
import { getAllRecipesApi } from "../store/actions/action";
import { useEffect } from "react";

export default function Discover(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllRecipesApi())
    },[])
    
    const recipes = useSelector(store=>store.recipes)

    console.log(recipes)
    return(
        <div>
            <p>asdasd</p>
        </div>
    )
} 