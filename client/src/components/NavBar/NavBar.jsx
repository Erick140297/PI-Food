import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { getDiets, getRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className={s.navBar}>
      <Link to={"/home/recipes"} style={{ textDecoration: "none" }}>
        <p className={s.link}>FoodApp</p>
      </Link>
      <Link to={"/home/create"} style={{ textDecoration: "none" }}>
        <p className={s.link}>Create a recipe</p>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
