import axios from "axios";

export const actions={
    RECIPE_FETCH_REQUEST: "RECIPE_FETCH_REQUEST",
    RECIPE_FETCH_SUCCESS: "RECIPE_FETCH_SUCCESS",
    RECIPE_FETCH_FAIL: "RECIPE_FETCH_FAIL",
    GET_ALL_RECIPES_API: "GET_ALL_RECIPES_API",
    SELECT_RECIPE:"SELECT_RECIPE",
    DELETE_RECIPE:"DELETE_RECIPE",
    SAVE_RECIPE:"SAVE_RECIPE",
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
            dispatch({ type: actions.RECIPE_FETCH_FAIL, payload: error }); 
        }
    };
}

const limit = 12;

export function getLimitedRecipesApi() {
    return async function (dispatch, getState) {
        try {
            dispatch({type:actions.RECIPE_FETCH_REQUEST})
            const response = await axios.get(`https://dummyjson.com/recipes?limit=${limit}`);
            dispatch({ type: actions.RECIPE_FETCH_SUCCESS, payload: response.data.recipes });
        } catch (error) {
            console.error("Error fetching recipes:", error);
            dispatch({ type: actions.RECIPE_FETCH_FAIL, payload: error }); 
        }
    };
}

export function deleteRecipe(id) {
    return async function (dispatch, getState) {
        try {
            const response = await axios.delete(`https://dummyjson.com/recipes/${id}`);
            dispatch({ type: actions.DELETE_RECIPE, payload: response.data.id });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
}

export function saveRecipe(formData) {
    return async function (dispatch, getState) {
        try {
            const response = await axios.post(`https://dummyjson.com/recipes/`);
            console.log(response);
            dispatch({ type: actions.SAVE_RECIPE, payload: formData });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
}