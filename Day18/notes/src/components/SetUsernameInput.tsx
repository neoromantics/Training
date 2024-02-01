import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, setUsername } from "../store";

const SetUsernameInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSetUsername = () => {
    dispatch(setUsername(inputValue));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSetUsername}>Set Username</button>
    </div>
  );
};

export default SetUsernameInput;
