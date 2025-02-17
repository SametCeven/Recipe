import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink, CardHeader, Spinner,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe } from '../store/actions/action';


export default function Recipe() {
    const dispatch = useDispatch();
    const recipe = useSelector(store => store.selectedRecipe)
    const recipesLoading = useSelector(store => store.recipesLoading)
    function handleDelete(e){
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
            <div>  <p>Please select a recipe...</p> </div>
        )
    }

    return (
        <div className="w-sm" >
            <Card>
                <img
                    alt="Card"
                    src={recipe.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {recipe.name}
                    </CardTitle>
                    <CardText>
                        Ingredients:
                        {recipe.ingredients.map((ingredient, index) => {
                            return (
                                <li key={index}>{ingredient}</li>
                            )
                        })}

                    </CardText>
                    <CardText>
                        Instructions:
                        {recipe.instructions.map((instruction, index) => {
                            return (
                                <li key={index}>{instruction}</li>
                            )
                        })}
                    </CardText>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>
                        <span>Cuisine: </span> {recipe.cuisine}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>Difficulty: </span> {recipe.difficulty}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>Meal Type: </span> {recipe.mealType}
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>Rating: </span> {recipe.rating}
                    </ListGroupItem>
                </ListGroup>
                <Button value={recipe.id} onClick={handleDelete} color="danger">Delete</Button>
            </Card>
        </div>
    )
}