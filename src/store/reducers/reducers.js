import { actions } from "../actions/action";

const stateInitial = {
    recipes: [],
    recipesLoading:false,
    selectedRecipe:{},
    error:"",
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
        default:
            return state;
    }
} 