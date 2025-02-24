import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { saveRecipe } from "../store/actions/action";
import { Button } from "reactstrap";

const formInitialData = {
    id: 100,
    imageUrl: "",
    name: "",
    ingredients: [],
    instructions: [],
    cuisine: "",
    difficulty: "",
    mealType: "",
    dateCreated: "",
}
const radio = ["Easy", "Medium", "Hard"];

export default function CreateRecipe() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: formInitialData,
        mode: "all",
    })
    function formSubmit(formData) {
        console.log(formData);
        dispatch(saveRecipe(formData));
    }

    return (
        <div className="m-5">
            <h2 className="mb-4">Create Recipe</h2>
            <form className="flex flex-col border-2 rounded-4xl p-5 gap-4" onSubmit={handleSubmit(formSubmit)}>
                <input className="input" placeholder="Image URL..." {...register("imageUrl")} />
                <input className="input" placeholder="Name..." {...register("name")} />
                <input className="input" placeholder="Ingredients..." {...register("ingredients")} />
                <input className="input" placeholder="Instructions..." {...register("instructions")} />
                <input className="input" placeholder="Cuisine..." {...register("cuisine")} />
                
                <div>
                    <h4 className="text-red-500"> Difficulty </h4>
                    {radio.map((r,index)=>{
                        return(
                            <div key={index} className="flex items-center ps-3">
                                <input className="" type="radio" {...register("difficulty")} key={r} id={r} />
                                <label htmlFor={r} key={index} className=""> {r} </label>
                            </div>
                        )
                    })}
                </div>

                <input className="input" placeholder="Meal Type..." {...register("mealType")} />
                <Button color="success" className="w-[10rem]">Save Recipe</Button>
            </form>
        </div>
    )
}