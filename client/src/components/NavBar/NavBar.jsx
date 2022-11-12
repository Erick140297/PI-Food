import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
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
