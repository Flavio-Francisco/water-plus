import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import OperatorFormNew from "../editFrom";
import OperatorFormEdit from "../newForm";
import './styles.css'


export default function ModalLabOperador() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <button className="button" onClick={handleShow}>
        Operador Responsável 
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LabTabs
            ComponetNew={
              <div>
                <OperatorFormEdit />
              </div>
            }
            ComponetEdit={
              <div>
                <OperatorFormNew />
              </div>
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}