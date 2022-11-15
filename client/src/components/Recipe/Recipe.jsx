import React from "react";
import { Link } from "react-router-dom";
import s from "./Recipe.module.css";

const Recipe = ({ id, image, name, healthScore, diets }) => {
  return (
    <Link to={`/home/recipes/${id}`} style={{ textDecoration: "none" }}>
      <div className={s.container}>
        <img className={s.img} src={image} alt={name} />
        <div className={s.text}>
          <p className={s.title}>{name}</p>
          <div className={s.score}>
            <p>Health score:</p>
            <p>{healthScore}</p>
          </div>
          <p>Diets: </p>
          <ul>
            {diets.map((diet, index) => {
              return <li key={index}>{diet}</li>;
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
