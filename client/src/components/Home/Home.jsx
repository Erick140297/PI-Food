import React, { useState } from "react";
import { useSelector } from "react-redux";
import filter from "../filter";
import Recipes from "../Recipes/Recipes";
import s from "./Home.module.css";

const Home = () => {
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);

  const [type, setType] = useState("");
  const [order, setOrder] = useState("none")

  const handlerChangeType = (e) => {
    setType(e.target.value);
  };

  const handlerChangeOrder = (e)=>{
    setOrder(e.target.value)
  }

  console.log(order)
  const data = filter(type, order, recipes);
  
  return (
    <>
      <div className={s.filters}>
        <div>
          <p>Select a type of diet:</p>
          <select name="diet" onChange={(e) => handlerChangeType(e)}>
            {diets?.map((element, index) => {
              return (
                <option value={element.name} key={index}>
                  {element.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <form className={s.order} onChange={(e)=> handlerChangeOrder(e)}>
            <p>Alphabetical order</p>
            <div>
              <input name="order" type="radio" value="A" />
              <label>A-Z</label>
            </div>
            <div>
              <input name="order" type="radio" value="Z" />
              <label>Z-A</label>
            </div>
            <p>Health score order</p>
            <div>
              <input name="order" type="radio" value="up" />
              <label>Ascending order</label>
            </div>
            <div>
              <input name="order" type="radio" value="down" />
              <label>Descending order</label>
            </div>
          </form>
        </div>
      </div>
      <Recipes data ={data} />
    </>
  );
};

export default Home;
