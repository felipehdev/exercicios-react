import React from "react";
import { useState, useEffect } from 'react'

const PrevisaoTempo = () => {
    const [ city, setCity] = useState('Curitiba') //adicionar local do usuario no futuro.
    const [ astro, setAstro] = useState(null)
    const [ emoji, setEmoji] = useState('🧛‍♂️')
    


    const handleCity = (e)=> {
        setCity(e.target.value);
    }

    // requisiçao

    const url = 'http://api.weatherapi.com/v1'
    const key = '1793f7c3da9846cdb84234725222907 '
    const currentWeatherRequest = '	/current.json'
    const forecastRequest = '/forecast.json' // require a 'days' parameter
    const astronomyRequest = '/astronomy.json'
    const lang = 'pt'
    const days = '123' //requeride with forecast parameter

    //respostas


    const handleRequest = async () => {
      fetch(`${url}${astronomyRequest}?key=${key}&lang=${lang}&q=${city}`)
      .then((response) => {
        if (response.status === 200) {
            return response.json()
        }
      })
      .then((data)=>{
        console.log('a resposta json:', data);
        setAstro(data)
      })
    }

    // funçao que transforma a string com fase da lua em um emoji
    useEffect(() => {
        if (astro ? ( astro.astronomy.astro.moon_phase === 'New Moon') : null) {
            setEmoji('🌑')
        }
    })
    
    
   

  return (
    <>
      <h1>Previsao do tempo e alerta de lobisomem</h1>
      <p>voce pode saber o clima na sua cidade e se é seguro sair a noite </p>
      <br />
      <section>
      <p>nome da cidade:</p>
      <input onChange={handleCity} type="text" value={city} />      
      <button onClick={handleRequest}> buscar </button>

      <div>
        {
            astro ? (
                 <p>{astro.astronomy.astro.moon_phase}</p>
            ) : null
        }
      </div>
      <div>
        {
            astro ? (
                <p>{emoji}</p>
            ) : null
        }
      </div>
      </section>
      
    </>
  );
};

export default PrevisaoTempo;
