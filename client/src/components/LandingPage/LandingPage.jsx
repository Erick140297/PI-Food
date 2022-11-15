import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getDiets, getRecipes,} from "../../redux/actions";

import s from "./LandingPage.module.css";

const LandingPage = () => {
  const dispatch = useDispatch()
  const diets = useSelector((state) => state.diets);
  console.log(diets)
  useEffect(() => {
    dispatch(getDiets());
    dispatch(getRecipes());
  }, [dispatch]);
  
  return (
    <div className={s.img}>
      <div className={s.topBar}>
        <h2>Welcom to FoodApp</h2>
        <Link to={"/home/recipes"} style={{ textDecoration: "none" }}>
          <button className={s.btn}>FoodApp</button>
        </Link>
      </div>
      <p className={s.text}>
        FoodApp is a single page aplication developed wiht react, redux, expres,
        sequelize and postgres that use the API of spoonacular.
      </p>
    </div>
  );
};

export default LandingPage;
