import axios from "axios";
import API from "../../services/api";

export const actions={
    RECIPE_FETCH_REQUEST: "RECIPE_FETCH_REQUEST",
    RECIPE_FETCH_SUCCESS: "RECIPE_FETCH_SUCCESS",
    RECIPE_FETCH_FAIL: "RECIPE_FETCH_FAIL",
    GET_ALL_RECIPES_API: "GET_ALL_RECIPES_API",
    SELECT_RECIPE:"SELECT_RECIPE",
    DELETE_RECIPE:"DELETE_RECIPE",
    SAVE_RECIPE:"SAVE_RECIPE",
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT"
}

export function creatorSelectRecipe(id){
    return({
        type:actions.SELECT_RECIPE,
        payload:id,
    })
}

export function createrLogin(loginData){
    return({
        type:actions.LOGIN,
        payload:loginData,
    })
}

export function createrLogout(){
    return({
        type:actions.LOGOUT,
    })
}



export function getAllRecipesApi() {
    return async function (dispatch, getState) {
        try {
            dispatch({type:actions.RECIPE_FETCH_REQUEST})
            const response = await API.get("?limit=0");
            dispatch({ type: actions.RECIPE_FETCH_SUCCESS, payload: response.data.recipes });
        } catch (error) {
            console.error("Error fetching recipes:", error);
            dispatch({ type: actions.RECIPE_FETCH_FAIL, payload: error }); 
        }
    };
}


export function getLimitedRecipesApi(limit=12,skip=0) {
    return async function (dispatch, getState) {
        try {
            dispatch({type:actions.RECIPE_FETCH_REQUEST})
            const response = await API.get(`?limit=${limit}&skip=${skip}`);
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
            const response = await API.delete(`/${id}`);
            dispatch({ type: actions.DELETE_RECIPE, payload: response.data.id });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
}

export function saveRecipe(formData) {
    return async function (dispatch, getState) {
        try {
            const response = await API.post(`/`);
            console.log(response);
            dispatch({ type: actions.SAVE_RECIPE, payload: formData });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
}