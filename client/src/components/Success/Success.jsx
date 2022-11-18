import React from "react";
import { useParams, Link } from "react-router-dom";
import s from "./Success.module.css"

const Success = () => {
  const { name } = useParams();
  return (
    <div className={s.container}>
      <p>{`Congratulations your recipe: ${name} was created with success`}</p>
      <Link to={`/home/name/${name}`} style={{ textDecoration: "none" }}>
        <p>{`Go to ${name}`}</p>
      </Link>
    </div>
  );
};

export default Success;
