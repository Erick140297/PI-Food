import axios from "axios";

export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const CLEAN_NAME = "CLEAN_NAME";
export const GET_RECIPES_ID = "GET_RECIPES_ID";
export const CLEAN_ID = "CLEAN_ID";

export const getDiets = () => {
  return function (dispatch) {
    return axios(`http://localhost:3001/diets`).then((response) => {
      dispatch({ type: GET_DIETS, payload: response.data });
    });
  };
};

export const getRecipes = (name) => {
  return function (dispatch) {
    return axios(`http://localhost:3001/recipes`).then((response) => {
      dispatch({ type: GET_RECIPES, payload: response.data });
    });
  };
};
