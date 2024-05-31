import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DoctorFormEdit from "../newForm";
import "./styles.css";
import { useDoctor } from "@/context/useDoctor";

export default function ModalLabDoctor() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleUpdate = (success: boolean) => setShowModal(success);
  const { doctor, refetch } = useDoctor();

  return (
    <>
      <button
        className="p-3 w-full text-lg text-left hover:bg-[#add8e6]"
        onClick={handleShow}
      >
        Responsável Técnico Médico
      </button>

      <Modal show={showModal} onHide={handleClose} className="m-10">
        <Modal.Header closeButton>
          <Modal.Title>Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorFormEdit
            data={
              doctor || {
                CRM: "",
                graduation: "",
                name: "",
                postGraduation: "",
                postGraduation2: "",
                id: 0,
                system_id: 0,
              }
            }
            refech={refetch}
            onUpdate={handleUpdate}
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