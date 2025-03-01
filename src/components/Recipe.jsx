import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink, CardHeader, Spinner, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe } from '../store/actions/action';


export default function Recipe() {
    const dispatch = useDispatch();
    const recipe = useSelector(store => store.selectedRecipe)
    const recipesLoading = useSelector(store => store.recipesLoading)
    function handleDelete(e) {
        console.log(e.target.value)
        dispatch(deleteRecipe(e.target.value))
    }


    if (recipesLoading) {
        return (
            <div> <Spinner className="text-primary"></Spinner>  Loading...</div>
        )
    }

    if (!recipe || recipe.length === 0 || Object.keys(recipe).length === 0) {
        return (
            <div>  <p className='text-red-600 italic mt-5'>Please select a recipe...</p> </div>
        )
    }

    return (
        <div className="max-w-5xl" >
            <h1 className='text-header'> {recipe.name} </h1>
            <div className='flex gap-10'>
                <div className='w-xs'>
                    <img className="rounded-2xl" src={recipe.image} alt={recipe.name} />
                    <div className='flex justify-between mx-10 my-3 italic'>
                        <span> {recipe.cuisine}  </span>
                        <span> {recipe.rating}  </span>
                    </div>
                </div>
                <div className='max-w-2xl'>
                    <div className='mb-3'>
                        <h4> Ingredients </h4>
                        {recipe.ingredients.map((ingredient) =>
                            <li key={ingredient} > {ingredient} </li>
                        )}
                    </div>
                    <div className=''>
                        <h4> Instructions </h4>
                        {recipe.instructions.map((instruction) =>
                            <li key={instruction} > {instruction} </li>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}