import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ChemistFormEdit, { CredentialsChemistdb } from "../editForm";
import "./styles.css";
import { useQuery } from "@tanstack/react-query";
import { getChemical } from "@/app/fecth/chemical";
import { useUserContext } from "@/context/userContext";

export default function ModalLabChemist() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleUpdate = (success: boolean) => setShowModal(success);
  const { user } = useUserContext();

  const { data, refetch } = useQuery<CredentialsChemistdb>({
    queryKey: ["chermicalDB"],
    queryFn: () => getChemical(user?.system_id || 0),
  });
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