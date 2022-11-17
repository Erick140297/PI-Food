import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanId, getRecipeId } from "../../redux/actions";
import Loader from "../Loader/Loader"
import RecipeDetail from "../RecipeDetail/RecipeDetail";

function RecipeId() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.recipeId);

  useEffect(() => {
    dispatch(getRecipeId(id));
    return function () {
      dispatch(cleanId());
    };
  }, [dispatch, id]);

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

export default RecipeId;
