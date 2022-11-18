import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./CreateRecipe.module.css";

const CreateRecipe = () => {
  const data = useSelector((state) => state.diets);
  let history = useHistory();
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [score, setScore] = useState(0);
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [diet, setDiet] = useState("");
  const [diets, setDiets] = useState([]);

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerChangeSummary = (e) => {
    setSummary(e.target.value);
  };

  const handlerChangeScore = (e) => {
    setScore(e.target.value);
  };

  const handlerChangeStep = (e) => {
    setStep(e.target.value);
  };

  const handlerChangeDiet = (e) => {
    setDiet(e.target.value);
  };

  const handlerClickStep = (e) => {
    e.preventDefault();
    setSteps([...steps, step]);
    setStep("");
  };

  const handlerClickDiet = (e) => {
    e.preventDefault();
    setDiets([...diets, diet]);
    setDiet("");
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/recipes', obj)
    .then(response => history.push(`/home/success/${response.data.name}`));
    // .then(response => console.log(response));
    // history.push(`/home/success/${obj.name}`);
  };

  const translator = (diets) => {
    let arrayDiets = [];
    const dictionary = {
      "gluten free": 1,
      ketogenic: 2,
      vegetarian: 3,
      vegan: 4,
      "dairy free": 5,
      "lacto ovo vegetarian": 6,
      paleolithic: 7,
      primal: 8,
      "whole 30": 9,
      pescatarian: 10,
      "fodmap friendly": 11,
    };
    diets.forEach((element) => {
      arrayDiets.push(dictionary[element]);
    });
    return arrayDiets;
  };

  const obj = {
    name,
    image:"http://localhost:3001/uploads/default.jpeg",
    summary,
    healthScore: parseInt(score),
    steps,
    arrayDiets: translator(diets)
  };

  return (
    <div className={s.container}>
      <h2>Create a recipe</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div className={s.requirement}>
          <label>
            <b>Name: </b>
          </label>
          <input
            className={s.input}
            type="text"
            onChange={(e) => handlerChangeName(e)}
            value={name}
          />
          {!name && <p className={s.message}>Is necessary add a name</p>}
        </div>
        <div className={s.requirement}>
          <label>
            <b>Summary :</b>
          </label>
          <textarea
            className={s.textarea}
            cols="40"
            rows="10"
            onChange={(e) => handlerChangeSummary(e)}
            value={summary}
          ></textarea>
          {!summary && <p className={s.message}>Is necessary add a summary</p>}
        </div>
        <div className={s.requirement}>
          <label>
            <b>{`Health score: ${score}`}</b>
          </label>
          <input
            className={s.score}
            type="range"
            name="healthScore"
            id="score"
            min="0"
            max="100"
            step="1"
            onChange={(e) => handlerChangeScore(e)}
            value={score}
          ></input>
          {score < 1 && <p className={s.message}>Is necessary add a score</p>}
        </div>
        <div className={s.requirement}>
          <label>
            <b>Add an or more steps: </b>
          </label>
          {steps?.map((e, i) => {
            return <label key={i}>{e}</label>;
          })}
          {steps.length === 0 && (
            <p className={s.message}>Is necessary add a or more steps</p>
          )}
          <div>
            <input
              className={s.input}
              type="text"
              onChange={(e) => handlerChangeStep(e)}
              value={step}
            />
            <button className={s.btn} onClick={(e) => handlerClickStep(e)}>Add</button>
          </div>
        </div>
        <div className={s.requirement}>
          <label>
            <b>Select an or more types of diets: </b>
          </label>
          {diets?.map((e, i) => {
            return <label key={i}>{e}</label>;
          })}
          {diets.length === 0 && (
            <p className={s.message}>Is necessary add a or more steps</p>
          )}
          <div>
            <select className={s.input} onChange={(e) => handlerChangeDiet(e)}>
              {data?.map((diet, i) => {
                return (
                  <option  value={diet.name} key={i}>
                    {diet.name}
                  </option>
                );
              })}
            </select>
            <button className={s.btn} onClick={(e) => handlerClickDiet(e)}>Add</button>
          </div>
        </div>
        <input
          className={s.btnSubmit}
          type="submit"
          value="Submit"
          disabled={
            !obj.name ||
            !obj.summary ||
            obj.healthScore < 1 ||
            obj.steps.length === 0 ||
            obj.arrayDiets.length === 0
          }
        />
      </form>
    </div>
  );
};

export default CreateRecipe;
