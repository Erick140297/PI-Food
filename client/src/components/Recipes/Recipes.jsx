import React, { useState } from "react";
import { useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";
import s from "./Recipes.module.css";

const Recipes = () => {
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);
 
  const [type, setType] = useState("");

  const handlerChange = (e) =>{
    setType(e.target.value)
  }

  console.log(type)

  let data = []

  if(!type){
    data = recipes
  } else {
    data = recipes.filter((e) => e.diets.find((e) => e === type));
  }

  
  return (
    <>
    <label>Diets: </label>
      <p>Select a type of diet</p>
      <select name="diet" onChange={(e)=>handlerChange(e)}>
        {diets?.map((element, index) => {
          return (
            <option value={element.name} key={index}>
              {element.name}
            </option>
          );
        })}
      </select>
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
