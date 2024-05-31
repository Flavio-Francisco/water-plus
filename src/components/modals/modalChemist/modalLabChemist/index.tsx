import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ChemistFormEdit from "../editForm";
import "./styles.css";

import { useChemist } from "@/context/useChermist";

export default function ModalLabChemist() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const { Chemist, refetch } = useChemist();
  return (
    <>
      <button
        className="p-3 w-full text-lg text-left hover:bg-[#add8e6]"
        onClick={handleShow}
      >
        Responsável Técnico Químico
      </button>

      <Modal show={showModal} onHide={handleClose} className="mt-10">
        <Modal.Header closeButton>
          <Modal.Title>Químico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChemistFormEdit
            data={
              Chemist || {
                CRM: "",
                graduation: "",
                id: 0,
                name: "",
                postGraduation: "",
                postGraduation2: "",
                system_id: 0,
              }
            }
            refech={refetch}
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