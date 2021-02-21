import React, { useState } from 'react'
import './styles/PokemonItem.css'
import Button from 'react-bootstrap/Button';

import ModalCard from './ModalCard.js'

const PokemonItem = ({resultado}) => {
    //Modal 
    const [ show, setShow ]  = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Extraer los valores 
    const { name, sprites, abilities, types} = resultado;
    
    //Funcion para poner mayusculas la primera letra

    const upperCase = (str) => str[0].toUpperCase() + str.slice(1);

    if(!name) return null;


    return (
            <div className="card card-pokemon">
                <div className="row g-0">
                    <div className="col-md-5 img">
                        <img className="card__img" src={sprites.front_default} alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-text title">{upperCase(name)}</h5>
                            <p className="abilities">Habilidades:</p>
                            <div className="habilidades">
                                {abilities.map((abi) => (
                                    <p 
                                        className="abilities__item"
                                        key={abi.ability.name}
                                    >
                                        {upperCase(abi.ability.name)}
                                    </p>
                                ))}
                            </div>

                            <p className="abilities">Tipo</p>
                            {types.map((type ) => (
                                <p key={type.type.name} className="abilities__item">{upperCase(type.type.name)}</p>
                            ))}
                            <div className="mt-2">
                                <Button
                                    variant="primary" onClick={handleShow}
                                >
                                    Estadisticas
                                </Button>
                            </div>

                            <ModalCard
                                resultado={resultado}
                                show={show}
                                handleClose={handleClose}
                                handleShow={handleShow}
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PokemonItem
