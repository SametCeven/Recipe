import { Link } from "react-router-dom";
export default function Header() {

    return (
        <div className=" w-full h-[10vh] bg-header text-white text-4xl flex justify-center items-center ">
            <Link className="title font-satisfy" to="/">Delicious Recipes</Link>

        </div>
    )
}