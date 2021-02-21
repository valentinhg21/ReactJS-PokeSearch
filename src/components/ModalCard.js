import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Progress from './Progress'
const ModalCard = ({show, handleClose, resultado}) => {
    //Extraer datos 
    const {stats} = resultado;
    return (
        <Modal show={show} onHide={handleClose} centered >
         <Modal.Header closeButton>
          <Modal.Title >Pikachu</Modal.Title>
         </Modal.Header>
        <Modal.Body>
            <Progress variante="success" porcentaje={stats[0].base_stat} titulo={'Vida'}/>
            <Progress variante="danger" porcentaje={stats[1].base_stat} titulo={'Daño'}/>
            <Progress variante="danger" porcentaje={stats[2].base_stat} titulo={'Ataque Especial'}/>
            <Progress porcentaje={stats[4].base_stat} titulo={'Defensa Especial'}/>
            <Progress porcentaje={stats[5].base_stat} titulo={'Velocidad'}/>
        </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default ModalCard
