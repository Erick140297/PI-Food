import React from "react";
import s from "./Error.module.css";

const Error = ({ message }) => {
  return (
    <div className={s.error}>
      <p>{`Error: ${message}`}</p>
    </div>
  );
};

export default Error;
