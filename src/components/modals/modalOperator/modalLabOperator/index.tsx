import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import OperatorFormNew from "../editFrom";
import OperatorFormEdit, { CredentialOperator } from "../newForm";
import "./styles.css";
import { useUserContext } from "@/context/userContext";
import { useQuery } from "@tanstack/react-query";
import { getOperator } from "@/app/fecth/operator";

export default function ModalLabOperador() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleUpdate = (success: boolean) => setShowModal(success);
  const { user } = useUserContext();

  const { data, refetch } = useQuery<CredentialOperator[]>({
    queryKey: ["operator"],
    queryFn: () => getOperator(user?.system_id || 0),
  });

  return (
    <>
      <button
        className="p-3 w-full text-lg text-left hover:bg-[#add8e6]"
        onClick={handleShow}
      >
        Operador Responsável
      </button>

      <Modal show={showModal} onHide={handleClose} className="m-10">
        <Modal.Header closeButton>
          <Modal.Title>Operador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LabTabs
            ComponetNew={
              <div>
                <OperatorFormEdit
                  data={data}
                  refech={refetch}
                  onUpdate={handleUpdate}
                />
              </div>
            }
            ComponetEdit={
              <div>
                <OperatorFormNew refech={refetch} onUpdate={handleUpdate} />
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
  );
}