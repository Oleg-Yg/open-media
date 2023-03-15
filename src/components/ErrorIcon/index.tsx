import React from "react";
import s from "./styles.module.scss";

const ErrorIcon = () => {
  return (
    <div className={s.error}>
      <div className={s.rectangle}></div>
      <div className={s.point}></div>
    </div>
  );
};

export default ErrorIcon;
