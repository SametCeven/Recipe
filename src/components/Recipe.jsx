import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { creatorSelectRecipe, deleteRecipe } from '../store/actions/action';


export default function Recipe() {
    const dispatch = useDispatch();
    const recipe = useSelector(store => store.selectedRecipe)
    const recipesLoading = useSelector(store => store.recipesLoading)
    function handleDelete(e) {
        console.log(e.target.value)
        dispatch(deleteRecipe(e.target.value))
        dispatch(creatorSelectRecipe(Number(e.target.value)+1))
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
        <div className="w-5xl border-1 rounded-2xl p-3" >
            <h1 className='text-header mb-3 font-title text-secondary'> {recipe.name} </h1>
            <div className='flex gap-10'>
                <div className=''>
                    <img className="rounded-2xl w-lg " src={recipe.image} alt={recipe.name} />
                    <div className='flex justify-between mx-10 my-3 italic'>
                        <span> {recipe.cuisine}  </span>
                        <span> {recipe.rating}  </span>
                    </div>
                    <button className='bg-red-500 text-white w-35' onClick={handleDelete} value={recipe.id}> Delete Recipe </button>
                </div>
                <div className='w-xl'>
                    <div className='mb-3'>
                        <h4 className='font-title text-secondary'> Ingredients </h4>
                        <div className='flex flex-wrap'>
                        {recipe.ingredients.map((ingredient) =>
                            <li className='w-[50%]' key={ingredient} > {ingredient} </li>
                        )}
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='font-title text-secondary'> Instructions </h4>
                        {recipe.instructions.map((instruction) =>
                            <li key={instruction} > {instruction} </li>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}