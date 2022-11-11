import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, image, name, diets }) => {
  return (
    <Link to={`/home/recipes/${id}`} style={{ textDecoration: "none" }}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>Diets: </p>
      <div>
        {diets.map((diet, index) => {
          return <p key={index}>{diet}</p>;
        })}
      </div>
    </Link>
  );
};

export default Recipe;
