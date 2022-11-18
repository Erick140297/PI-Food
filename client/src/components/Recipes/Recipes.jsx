import React from "react";
import Recipe from "../Recipe/Recipe";
import Error from "../Error/Error";
import s from "./Recipes.module.css";

const Recipes = ({ data, error }) => {
  return (
    <>
      {Object.entries(error).length === 1 ? (
        <Error message={error.error} />
      ) : (
        <div className={s.container}>
          {data.map((recipe) => {
            return (
              <div key={recipe.id}>
                <Recipe
                  id={recipe.id}
                  image={recipe.image}
                  name={recipe.name}
                  healthScore={recipe.healthScore}
                  diets={recipe.diets}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Recipes;
