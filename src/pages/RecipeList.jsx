import { useDispatch, useSelector } from "react-redux"
import { creatorSelectRecipe, getAllRecipesApi, getLimitedRecipesApi } from "../store/actions/action"
import { Spinner } from "reactstrap"
import { useEffect, useState } from "react"
import Recipe from "../components/Recipe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(15);
    const [skip, setSkip] = useState(0);
    const [maxPages, setMaxPages] = useState(0);
    const [pages, setPages] = useState([]);

    const dispatch = useDispatch();
    const recipes = useSelector(store => store.recipes)
    const recipesLoading = useSelector(store => store.recipesLoading)
    const selectedRecipe = useSelector(store => store.selectedRecipe)

    function handleClickPage(e) {
        console.log(maxPages)
        if (e === "Next") {
            setPage(page + 1)
        }
        else if (e === "Previous") {
            setPage(page - 1)
        }
        else {
            setPage(Number(e))
        }
    }


    function handleClickRecipe(e) {
        dispatch(creatorSelectRecipe(e.target.value));
    }

    useEffect(() => {
        let tempSkip = 0;
        tempSkip = (page - 1) * limit
        setSkip(tempSkip);
        dispatch(getLimitedRecipesApi(limit, tempSkip))
    }, [page])

    useEffect(() => {
        let maxPagesTemp = (Math.ceil(50 / limit));
        setMaxPages(maxPagesTemp)
        let pageTemp = []
        for (let i = 1; i <= maxPagesTemp; i++) {
            pageTemp.push(i)
        }
        setPages(pageTemp)
    }, [])

    if (recipesLoading) {
        return (
            <div> <Spinner className="text-primary"></Spinner>  Loading...</div>
        )
    }

    return (
        <div className="flex mx-10 my-10 ">
            <div className="mr-20">
                <h2 className="ml-3 text-header">Recipe List</h2>
                <div className="flex items-center justify-center my-3 text-xs gap-1">
                    {page === 1 ? "" : <FontAwesomeIcon className="btn-2" onClick={()=>handleClickPage("Previous")} icon={faArrowLeft} />}
                    
                    {pages.map((pag) =>
                        <button className={`btn-1 ${pag === page ? "bg-blue-200" : ""}`} value={pag} key={pag} onClick={()=>handleClickPage(pag)}> {pag} </button>
                    )}

                    {page === maxPages ? "" : <FontAwesomeIcon className="btn-2" onClick={()=>handleClickPage("Next")} icon={faArrowRight} />}

                </div>
                {recipes.map((recipe) => {
                    return (
                        <li className={`list-none text-xs rounded-xl px-3 py-2 hover:bg-blue-100 cursor-pointer ${selectedRecipe.id === recipe.id ? "bg-blue-100" : ""}`} onClick={handleClickRecipe} key={recipe.id} value={recipe.id}>{recipe.name} </li>
                    )
                })}
            </div>
            <Recipe></Recipe>
        </div>
    )
}