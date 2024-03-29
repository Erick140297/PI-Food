import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getRecipes, cleanRecipes } from "../../redux/actions";
import { control, paginated } from "../controllers";
import Recipes from "../Recipes/Recipes";
import Loader from "../Loader/Loader";
import s from "./Home.module.css";

const Home = () => {
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [order, setOrder] = useState("none");
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getDiets());
    dispatch(getRecipes());
    return dispatch(cleanRecipes());
  }, [dispatch]);

  const handlerChangeType = (e) => {
    setType(e.target.value);
  };

  const handlerChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  const handlerClickPositive = () => {
    setPage(page + 1);
  };

  const handlerClickNegative = () => {
    setPage(page - 1);
  };

  const dataFilter = control(type, order, recipes);
  const { pageNumber, data } = paginated(page, dataFilter);

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
        <div className={s.paginated}>
          <p>Paginated</p>
          <div className={s.buttons}>
            <button onClick={handlerClickNegative} disabled={page === 0}>
              {"<< Previous"}
            </button>
            <button
              className={s.button}
              onClick={handlerClickPositive}
              disabled={page === pageNumber - 1}
            >
              {"Next >>"}
            </button>
          </div>
        </div>
        <div>
          <form className={s.order} onChange={(e) => handlerChangeOrder(e)}>
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
      {dataFilter.length === 0 ? (
        <Loader />
      ) : (
        <Recipes data={data} error={recipes} />
      )}
    </>
  );
};

export default Home;
