import axios from "axios";

export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const CLEAN_NAME = "CLEAN_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
export const CLEAN_ID = "CLEAN_ID";

export const getDiets = () => {
  return function (dispatch) {
    return axios(`http://localhost:3001/diets`).then((response) => {
      dispatch({ type: GET_DIETS, payload: response.data });
    });
  };
};

export const getRecipes = () => {
  return function (dispatch) {
    return axios(`http://localhost:3001/recipes`).then((response) => {
      dispatch({ type: GET_RECIPES, payload: response.data });
    });
  };
};

export const getRecipeName = (name) => {
  return function (dispatch) {
    return axios(`http://localhost:3001/recipes?name=${name}`).then(
      (response) => {
        dispatch({ type: GET_RECIPE_NAME, payload: response.data });
      }
    ).catch((error)=>{
      dispatch({ type: GET_RECIPE_NAME, payload: error.response.data });
    });
  };
};

export const cleanName = () => {
  return { type: CLEAN_NAME };
};

export const getRecipeId = (id) => {
  return function (dispatch) {
    return axios(`http://localhost:3001/recipes/${id}`).then(
      (response) => {
        dispatch({ type: GET_RECIPE_ID, payload: response.data });
      }
    ).catch((error)=>{
      dispatch({ type: GET_RECIPE_ID, payload: error.response.data });
    });
  };
};

export const cleanId = () => {
  return { type: CLEAN_ID };
};