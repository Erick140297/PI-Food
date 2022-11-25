import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  let history = useHistory();

  const handlerChange = (e) => {
    setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    history.push(`/home/name/${name}`);
    setName("");
  };
  
  return (
    <form onSubmit={(e) => handlerSubmit(e)}>
      <input
        className={s.text}
        type="text"
        placeholder="Search recipe..."
        value={name}
        onChange={(e) => handlerChange(e)}
      />
      <input
        className={s.btn}
        type="submit"
        value="Search"
        disabled={!name}
      />
    </form>
  );
};

export default SearchBar;
