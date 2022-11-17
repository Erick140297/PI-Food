import React from "react";
import s from "./RecipeDetail.module.css";

const RecipeDetail = ({ data }) => {
  return (
    <>
      {Object.entries(data).length === 1 ? (
        <div className={s.error}>
          <p>{data.error}</p>
        </div>
      ) : (
        <div className={s.container1}>
          <div className={s.container2}>
            <img className={s.img} src={data.image} alt={data.name} />
            <p className={s.name}>
              <b>{data.name}</b>
            </p>
            <div>
              <p>
                <b>Diets: </b>
              </p>
              <ul>
                {data.diets?.map((diet, index) => {
                  return <li key={index}>{diet}</li>;
                })}
              </ul>
              <p>
                <b>{`Health score: ${data.healthScore}`}</b>
              </p>
            </div>
          </div>
          <div className={s.container3}>
            <p>
              <b>Summary: </b>
            </p>
            <p>{data.summary.replace(/<[^>]*>/g, "")}</p>
            <p>
              <b>Steps: </b>
            </p>
            <ul>
              {data.steps?.map((step, index) => {
                return <li key={index}>{step}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
