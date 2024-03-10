import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import ChemistFormNew from "../newForm";
import ChemistFormEdit from "../editFrom";
import './styles.css'


export default function ModalLabChemist() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <button className="button" onClick={handleShow}>
        Químico
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Químico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LabTabs
            ComponetNew={
              <div>
                <ChemistFormEdit />
              </div>
            }
            ComponetEdit={
              <div>
                <ChemistFormNew />
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