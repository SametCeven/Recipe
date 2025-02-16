import axios from "axios";

export const actions={
    RECIPE_FETCH_REQUEST: "RECIPE_FETCH_REQUEST",
    RECIPE_FETCH_SUCCESS: "RECIPE_FETCH_SUCCESS",
    RECIPE_FETCH_FAIL: "RECIPE_FETCH_FAIL",
    GET_ALL_RECIPES_API: "GET_ALL_RECIPES_API",
    SELECT_RECIPE:"SELECT_RECIPE",
}

export function creatorSelectRecipe(id){
    return({
        type:actions.SELECT_RECIPE,
        payload:id,
    })
}


export function getAllRecipesApi() {
    return async function (dispatch, getState) {
        try {
            dispatch({type:actions.RECIPE_FETCH_REQUEST})
            const response = await axios.get("https://dummyjson.com/recipes?limit=0");
            dispatch({ type: actions.RECIPE_FETCH_SUCCESS, payload: response.data.recipes });
        } catch (error) {
            console.error("Error fetching recipes:", error);
            dispatch({ type: actions.RECIPE_FETCH_FAIL, payload: [] }); 
        }
    };
}