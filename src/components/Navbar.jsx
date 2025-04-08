import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const page = useLocation();
    const user = useSelector(store => store.user)



    return (
        <div className="w-full h-[5vh] flex justify-center items-center gap-6 bg-header ">

            <Link className={`navitem ${page.pathname === "/" ? "navitem-current" : ""}`} to="/">Mainpage</Link>

            <Link className={`navitem ${page.pathname === "/discover" ? "navitem-current" : ""}`} to="/discover">Discover</Link>

            <Link className={`navitem ${page.pathname === "/recipelist" ? "navitem-current" : ""}`} to="/recipelist">Recipe List</Link>

            {Object.keys(user).length !== 0 && user.name !== "error" ?
                <Link className={`navitem ${page.pathname === "/createrecipe" ? "navitem-current" : ""}`} to="/createrecipe">Create Recipe</Link>
                : ""
            }

            {Object.keys(user).length === 0 || user.name === "error" ?
                <Link className={`navitem ml-10`} to="/"> Login </Link>
                : <Link className={`navitem ml-10`} to="/">Logout</Link>
            }
        </div>
    )
}