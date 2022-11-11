import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiets } from "../../redux/actions";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
      <h2>Welcom to FoodApp</h2>
      <p>FoodApp is a single page aplication developed wiht react, redux, expres, sequelize and postgres that use the API of spoonacular.</p>
      <Link to={"/home/recipes"} style={{textDecoration: 'none'}}>
        <button>FoodApp</button>
      </Link>
    </div>
  );
};

export default LandingPage;
