import React, { useState } from 'react';
import Search from './components/Search.js';
import PokeItem from './components/PokeItem.js'
import { fetchPokemon } from './services/getPokemon.js'
import logo from './img/Pokemon.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
    // Estados del pokemon
    const [ pokemon, setPokemon ] = useState('');
    // Estado del loading
    const [ loading, setLoading ] = useState(false);
    // Estado del loading
    const [ error, setError ] = useState(false);
    // Estado del Error Mensaje
    const [ errorMsg, setErrorMsg ] = useState('');
    // Funcion para recibir un pokemon
    const getPokemon = async (query) => {
      if (!query) {
        setErrorMsg('Debes ingresar un Pokemon')
        setError(true);
        return;
      }
    // Loading is True cuando trata de buscar la respuesta al fetch
    setLoading(true);

    setTimeout(async () => {
      try{
        // Manda un Fetch a la API de PokeAPI
        const response = await fetchPokemon(query);
        // Guardo la respuesta en un json en la constante de results
        const results = await response.json();
        // Lo guardo en el estado setPokemon
        // console.log(results)
        setPokemon(results);
        setLoading(false);
      } catch(error){
        setLoading(false);
        setError(true);
        setErrorMsg('El pokemon ingresado no es correcto.')
      }
    }, 1000)
  }


  return (
    <div className="container  container_padre">
        <img src={logo} alt='logo-pokemon' className="img-fluid logo mt-5"/>
          { error ? <div className="alert alert-danger">{errorMsg}</div> : null }
        <Search getPokemon={getPokemon} />
        {loading ?
          <div className="spinner-container">
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
         :null }
        {!loading && pokemon ? (
            <PokeItem
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            abilities = {pokemon.abilities}
            stats = {pokemon.stats}
            types={pokemon.types}
            />
        ) : null  }
    </div>
  );
}

export default App;
