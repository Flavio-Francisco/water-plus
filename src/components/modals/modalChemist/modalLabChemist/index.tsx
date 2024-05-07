import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import ChemistFormNew from "../newForm";
import ChemistFormEdit from "../editForm";
import './styles.css'


export default function ModalLabChemist() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <button
        className="p-3 w-full text-lg text-left hover:bg-[#1976d2]"
        onClick={handleShow}
      >
        Responsável Técnico Químico
      </button>

      <Modal show={showModal} onHide={handleClose} className="mt-10">
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
          <Button
            className="bg-slate-500"
            variant="secondary"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}