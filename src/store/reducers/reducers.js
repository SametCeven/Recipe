import { actions } from "../actions/action";

const stateInitial = {
    recipes: [],
    selectedRecipe:{},
    loadingRecipe:false,
}

export function reducer(state=stateInitial,action){
    switch(action.type){
        case actions.RECIPE_FETCH_REQUEST:
            return {...state,loadingRecipe:true}
        case actions.RECIPE_FETCH_SUCCESS:
            return {...state,recipes:action.payload, loadingRecipe:false}
        case actions.SELECT_RECIPE:
            const selRecp = state.recipes.filter((r)=>r.id === action.payload)[0]
            return {...state,selectedRecipe:selRecp}
        default:
            return state;
    }
} 