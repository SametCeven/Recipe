import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink, CardHeader, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';


export default function Recipe() {
    const recipe = useSelector(store=>store.selectedRecipe)
    const loadingRecipe = useSelector(store=>store.loadingRecipe)

    if (loadingRecipe){
        return (
            <div> <Spinner className="text-primary"></Spinner>  Loading...</div>
        )
    }

    if (!recipe || recipe.length === 0 || Object.keys(recipe).length === 0){
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
                        Instructions:{recipe.instructions[0]}
                    </CardText>
                    <CardText>
                        Ingredients: {recipe.ingredients[0]}
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
            </Card>
        </div>
    )
}