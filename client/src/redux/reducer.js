import {
  GET_DIETS,
  GET_RECIPES,
  CLEAN_RECIPES,
  GET_RECIPE_NAME,
  CLEAN_NAME,
  GET_RECIPE_ID,
  CLEAN_ID,
} from "./actions";

const initialState = {
  diets: [],
  recipes: [],
  recipeName: {},
  recipeId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIETS:
      return {
        ...state,
        diets: [{ id: 0, name: "" }].concat(action.payload),
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case CLEAN_RECIPES:
      return {
        ...state,
        recipes: [],
      };
    case GET_RECIPE_NAME:
      return {
        ...state,
        recipeName: action.payload,
      };
    case CLEAN_NAME:
      return {
        ...state,
        recipeName: {},
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipeId: action.payload,
      };
    case CLEAN_ID:
      return {
        ...state,
        recipeId: {},
      };
    default:
      return { ...state };
  }
};

export default reducer;
