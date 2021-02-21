import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './styles/Progress.css'


const Progress = ({porcentaje, titulo, variante}) => {

    const now = porcentaje;
    const variant = variante
    const progressInstance = <ProgressBar variant={variant} now={now} label={`${now}%`} />;

    return (
            <div className="progress__bar">
                <h5>{titulo}</h5>
                {progressInstance}
            </div>
    )
}

export default Progress
