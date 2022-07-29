import React from "react";
import { useState } from "react";

const Contador = (props) => {
  const [time, setTime] = useState(0);

  const incrementer = () => {
    setTime((prevTime) => prevTime + 1);
  };
  const decrementer = () => {
    setTime((prevTime) => prevTime - 1);
  };

  console.log(props);
  return (
    <>
      <h1>Contador</h1>
      <div>{time}</div>
      <button onClick={incrementer}>+1</button>
      <button onClick={decrementer}>-1</button>
    </>
  );
};

export default Contador;
