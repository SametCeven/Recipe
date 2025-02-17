import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div className="w-full h-[3rem] flex justify-center items-center mb-3 gap-6 bg-secondary text-white">
            <Link to="/">Mainpage</Link>
            <Link to="/recipelist">Recipe List</Link>
            <Link to="/">Create Recipe</Link>
        </div>
    )
}