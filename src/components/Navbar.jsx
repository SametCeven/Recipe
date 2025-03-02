import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
    const page = useLocation();
    return(
        <div className="w-full h-[3rem] flex justify-center items-center mb-3 gap-6 bg-header">
            <Link className={`navitem ${page.pathname==="/" ? "navitem-current" : ""}`} to="/">Mainpage</Link>
            <Link className={`navitem ${page.pathname==="/discover" ? "navitem-current" : ""}`} to="/discover">Discover</Link>
            <Link className={`navitem ${page.pathname==="/recipelist" ? "navitem-current" : ""}`} to="/recipelist">Recipe List</Link>
            <Link className={`navitem ${page.pathname==="/createrecipe" ? "navitem-current" : ""}`} to="/createrecipe">Create Recipe</Link>
        </div>
    )
}