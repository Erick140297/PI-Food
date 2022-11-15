import React from "react";
import Recipe from "../Recipe/Recipe";
import s from "./Recipes.module.css";

const Recipes = ({data}) => {
  return (
    <>
      {data.length === 0 ? (
        <h2>Loading...</h2>
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
