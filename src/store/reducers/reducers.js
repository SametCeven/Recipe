import { actions } from "../actions/action";

const stateInitial = {
    recipes: [],
    recipesLoading:false,
    selectedRecipe:{},
    error:false,
    loading:false,
    user:{},
    registeredUsers:[{
        name:"admin",
        password:"123",
    },{
        name:"admin2",
        password:"123",
    }]
}

export function reducer(state=stateInitial,action){
    switch(action.type){
        case actions.RECIPE_FETCH_REQUEST:
            return {...state,recipesLoading:true}
        case actions.RECIPE_FETCH_SUCCESS:
            return {...state,recipes:action.payload, recipesLoading:false}
        case actions.RECIPE_FETCH_FAIL:
            return {...state,error:action.payload.message, recipesLoading:false}
        case actions.SELECT_RECIPE:
            const selRecp = state.recipes.filter((r)=>r.id === action.payload)[0]
            return {...state,selectedRecipe:selRecp}
        case actions.DELETE_RECIPE:
            const newRecp = state.recipes.filter((r)=>r.id !== action.payload )
            return {...state,recipes:newRecp}
        case actions.SAVE_RECIPE:
            const newRecp2 = action.payload
            return {...state,recipes:[...state.recipes,newRecp2]}   
        case actions.LOGIN:
            const foundUser = state.registeredUsers.filter(
                (user)=>user.name===action.payload.name && user.password ===action.payload.password)
            console.log(foundUser)
            if( foundUser.length !== 0){
                return {...state,user:action.payload}
            }else{
                return {...state,user:{name:"error",password:"error"}}
            }
        case actions.LOGOUT:
            return {...state, user:{}}

        default:
            return state;
    }
} 