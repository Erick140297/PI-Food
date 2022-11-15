import {
  GET_DIETS,
  GET_RECIPES,
  GET_RECIPES_NAME,
  CLEAN_NAME,
  GET_RECIPES_ID,
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
        diets: [{id:0, name:""}].concat(action.payload),
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPES_NAME:
      return {
        ...state,
        recipeName: action.payload,
      };
    case CLEAN_NAME:
      return {
        ...state,
        recipeName: {},
      };
    case GET_RECIPES_ID:
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
