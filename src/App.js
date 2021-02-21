import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Pokemon from './img/Pokemon.png'
import Formulario from './components/Formulario.js'
import Error from './components/Error.js'
import Loading from './components/Loading.js'
import PokemonItem from './components/PokemonItem'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  //Estado de la busqueda
  const [ busqueda, guardarBusqueda ] = useState({
    pokemon: ''
  })

  //Estado de la consulta
  const [ consultar, guardarConsultar ] = useState(false)

  //Estado del resultado
  const [ resultado, guardarResultado ] = useState({});

  //Estado del error
  const [ error, guardarError ] = useState(false);

  //Estado del Cargando
  const [cargando, guardarCargando ] = useState(false)

  //Extraemos pokemon
  const{ pokemon } = busqueda
  
  //Letras en minusculas 
  const poke = pokemon.toLowerCase().replace(/\s+/g, '')


  useEffect(() => {

        //Consultar API 
        const consultarAPI = async () => {
          
          
          try{
              if(consultar){
                const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
                const resultado = await Axios.get(url);
                guardarCargando(true)

                setTimeout(() => {
                  guardarCargando(false)
                  guardarResultado(resultado.data);
                  guardarConsultar(false);
                  
                  guardarError(false)
                },1500)
              }

          }catch(err){
            guardarError(true)
          }
      }

    //Si no hay errores, consulto a la API
    consultarAPI()
    guardarConsultar(false)
    
    // eslint-disable-next-line
  },[consultar])



  return (
    <>
        <div className="container-fluid bg-dark p-1">
          <h5 className="text-center text-light">Encuentra todos los pokemones aquí!</h5>
        </div>
        <div className="container app">
            <div className="imagen__contenedor">
             <img className="logo" src={Pokemon} alt=""/>
            </div>
            {error ? (<Error mensaje="El pokemon no existe!"/>) : null }
              <Formulario 
                  busqueda = { busqueda }
                  guardarBusqueda = {guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                />
              {cargando ?(<Loading/>) : null}
              {!cargando && busqueda ? (
                  <div className="d-flex justify-content-center w-100  align-items-center">
                     <PokemonItem
                        resultado={resultado}
                     /> 
                </div>
              ) : null}
        </div>
        <div className="container-fluid bg-dark footer">
          <h5 className="text-center text-light">Creado por Valentin Gutiérrez</h5>
        </div>
    </>
  );
}

export default App;
