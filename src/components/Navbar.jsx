import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div className="w-full h-[3rem] flex justify-center items-center mb-3 gap-6 bg-blue-950 no-underline">
            <Link className="navitem" to="/">Mainpage</Link>
            <Link className="navitem" to="/discover">Discover</Link>
            <Link className="navitem" to="/recipelist">Recipe List</Link>
            <Link className="navitem" to="/createrecipe">Create Recipe</Link>
        </div>
    )
}