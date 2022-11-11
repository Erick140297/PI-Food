import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <p>FoodApp</p>
      </Link>
      <Link to={"/home/create"} style={{ textDecoration: "none" }}>
        <p>Create a recipe</p>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
