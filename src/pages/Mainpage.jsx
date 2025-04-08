import { useDispatch, useSelector } from "react-redux"
import { createrLogin, createrLogout } from "../store/actions/action";

export default function Mainpage() {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createrLogin({
            name: e.target[0].value,
            password: e.target[1].value,
        }))
    }

    function handleLogout(e) {
        dispatch(createrLogout())
    }



    if (Object.keys(user).length !== 0 && user.name !== "error" && user.password !== "error") {
        return (
            <div className="flex justify-center items-center my-4 flex-col ">
                <div className="border-2 p-10 rounded-2xl flex flex-col gap-4 items-center w-80">
                    <p>Logged In As</p>
                    <span> {user.name} </span>
                    <button className="p-4 border-2 rounded-2xl" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-center my-4">
                <form className="flex flex-col border-2 p-8 m-8 w-80 rounded-2xl gap-4" onSubmit={handleSubmit}>
                    <h1 className="mb-8"> Login </h1>
                    <label className="border-b-2 w-40" htmlFor="name">
                        <input className="w-40" type="text" name="name" id="name" placeholder="Name" />
                    </label>
                    <label className="border-b-2 w-40" htmlFor="password">
                        <input className="w-40" type="password" name="password" id="password" placeholder="Password" />
                    </label>
                    <button className="border-2 rounded-2xl mt-4">Login</button>
                    {user.name === "error" ? <p className="text-red-500">Name or Password is Invalid</p> : ""}
                    <span className="text-blue-900"> You can login with the following :  Name=admin Password=123</span>
                </form>
            </div>
        )
    }


}

