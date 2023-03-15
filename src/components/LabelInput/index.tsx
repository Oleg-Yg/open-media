import React, { ChangeEvent, useState } from "react";
import s from "./styles.module.scss";
import { LabelInputProps } from "./types";
import ErrorIcon from "../ErrorIcon";

const LabelInput: React.FC<LabelInputProps> = ({
  value,
  setValue,
  isError = false,
  onClickSend,
  errorMassage,
}) => {
  const [error, setError] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    setError(isError);
    if (isError) return;
    onClickSend();
  };

  return (
    <div>
      <div className={s.wrapperLabel}>
        <label className={s.label}>
          <input
            className={s.input}
            placeholder={"https://"}
            value={value}
            onChange={onChange}
          />
          {error && <ErrorIcon />}
        </label>
        <button className={s.button} onClick={onClick}>
          <img className={s.icon} src={"static/icons/arrow.png"} />
        </button>
      </div>
      {error && <span className={s.errorMassage}>{errorMassage}</span>}
    </div>
  );
};

export default LabelInput;
