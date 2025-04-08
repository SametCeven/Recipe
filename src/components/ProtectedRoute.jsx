import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min"

export default function ProtectedRoute({children,...rest}){
    const user = useSelector(store=>store.user)
    
    return(
        <Route
            {...rest}
            render={()=>
                Object.keys(user).length !== 0 ? children : <Redirect to="/"></Redirect>
            }>
        </Route>
    )
}