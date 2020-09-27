import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
const Search = (props) => {
  //State del search
  const [ search, setSearch ] = useState();

  //Funcion del input search para ver las props
  const searchOnChange = (e) => {
    //Le pongo al estado el value
    setSearch(e.target.value)
  }


  //Funcion del boton search para buscar Pokemon
  const onClickSearch = (e) => {
    props.getPokemon(search)
  }


  return (
    <div className="container">
        <div className="row">
          <div className="col-12 mb-3 col-md-10 col-sm-12 mb-sm-3 col-xs-12">
            <input
            className="form-control form-control-lg"

            placeholder="Buscar un Pokemon"
            onChange={searchOnChange}
             />
          </div>
          <div className="col-12 col-md-2 col-sm-12">
            <button
             className="btn btn-primary btn-lg btn-block"
             onClick = { onClickSearch }
             type="submit"
             >
             Search
             </button>
          </div>
        </div>
    </div>
  )
}
Search.propTypes = {
  searchOnChange: PropTypes.func,
  onClickSearch: PropTypes.func
}
export default Search
