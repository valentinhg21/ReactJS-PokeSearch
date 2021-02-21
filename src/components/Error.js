import React from 'react'
import './styles/Error.css'
const Error = ({mensaje}) => {
    return (
            <div className="alerta">
                <p className="alert alert-danger">{mensaje}</p>
            </div>
            
    )
}

export default Error
