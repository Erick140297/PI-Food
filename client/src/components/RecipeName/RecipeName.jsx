import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanName, getRecipesName } from "../../redux/actions";
import Loader from "../Loader/Loader"
import RecipeDetail from "../RecipeDetail/RecipeDetail";

function RecipeName() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const data = useSelector((state) => state.recipeName);

  useEffect(() => {
    dispatch(getRecipesName(name.toUpperCase()));
    return function () {
      dispatch(cleanName());
    };
  }, [dispatch, name]);

  return (
    <>
      {Object.entries(data).length === 0 ? (
        <Loader/>
      ) : (
        <RecipeDetail data={data} />
      )}
    </>
  );
}

export default RecipeName;
