import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DoctorFormEdit, { CredentialDoctordb } from "../newForm";
import "./styles.css";
import { getDoctor } from "@/app/fecth/doctor";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "@/context/userContext";

export default function ModalLabDoctor() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleUpdate = (success: boolean) => setShowModal(success);
  const { user } = useUserContext();

  const { data, refetch } = useQuery<CredentialDoctordb>({
    queryKey: ["doctorModal"],
    queryFn: () => getDoctor(user?.system_id || 0),
  });
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
            data={data}
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