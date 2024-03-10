import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import DoctorFormNew from "../editFrom";
import DoctorFormEdit from "../newForm";
import './styles.css'


export default function ModalLabDoctor() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <button className="button" onClick={handleShow}>
        Responsável Técnico Médico
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LabTabs
            ComponetNew={
              <div>
                <DoctorFormEdit />
              </div>
            }
            ComponetEdit={
              <div>
                <DoctorFormNew />
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