import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Recipe
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              diets={recipe.diets}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
