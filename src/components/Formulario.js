import React, { useState } from 'react'
import Error from './Error.js'
const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    //Error del formulario 
    const[error, guardarError] = useState(false);

    //Extraemos los datos 
    const { pokemon } = busqueda

    //Funcion para leer los inputs 
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda, 
            [e.target.name]:e.target.value
        })
    }


    //Cuando el usuario da Submit al form
    const handleSubmit = e => {
        e.preventDefault()
    
        //Validar si ingreso un pokemon 
        if(pokemon.trim() === ''){
            guardarError(true);
            return;
        }
    
        //Pasamos al componente principal
        guardarError(false)
        guardarConsultar(true)
    }
    return (
        <div className="container d-flex justify-content-center flex-column">
         
                {error ? (<Error mensaje="Ingresar un Pokemon!"/>) : null }



                <form 
                className="row justify-content-center"
                onSubmit={handleSubmit}
            >   

                <div className="col-md-10 col-sm-12 col-12">
                    <input 
                        name="pokemon"
                        value={pokemon}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Buscar pokemon"
                    />
                </div>
                <div className="col-md-auto col-sm-12 col-12 d-grid gap-2">
                    <button
                        type="submit"    
                        className="btn btn-primary btn-lg button" 
                    >
                        Buscar
                    </button>
                </div>
                
             </form>
        </div>




    )
}

export default Formulario