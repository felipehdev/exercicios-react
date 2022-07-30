import React from "react";
import { useState } from "react";

const PokeSaver = () => {
  // controle do input
  const [input, setInput] = useState("123");
  const [pokemon, setPokemon] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  //requisiçao para a pokeapi
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

  const handleRequest = async () => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  };

  //salvar o pokemon

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleRequest}>Procurar</button>
      <button  >Salvar</button>
      <div></div>
    </div>
  );
};

export default PokeSaver;
