import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

const PokeApi = () => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(err => console.log(err))
  }, [])

  
  // const getPokemon = async () => { 
  //   const URL = "https://pokeapi.co/api/v2/pokemon/ditto"
  //   const response = await fetch( URL )
  //   const data = await response.json()
  //   setPokemon( data.results )
  // }

  console.log(pokemon);
  
  const estilo = {
    "font-size": "40px",
    "text-align": "center"
  }

  const estiloImg = {
    "zoom": "1.5",
    "margin-left": "400px"
  }

  return (
    <div>
      {/* <p>
      {
        pokemon
        ?
          <div style={estilo}>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={estiloImg} />
          </div>
        :
          <div>
            Cargando...
          </div>
      }  
      </p>   */}
     <p>
      {
        pokemon
        ?
          <div style={estilo}>
            { pokemon.map(poke => <Pokemon key={poke.name} name={poke.name} url={poke.url}/>) }
          </div>
        :
          <div>
            Cargando...
          </div>
      }  
      </p>  
    </div>
  )
}

export default PokeApi