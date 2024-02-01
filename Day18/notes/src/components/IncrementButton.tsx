import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, incrementCounter } from "../store";

const IncrementButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  return <button onClick={handleIncrement}>Increment Counter</button>;
};

export default IncrementButton;
