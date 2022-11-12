import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiets } from "../../redux/actions";
import s from "./LandingPage.module.css";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
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
