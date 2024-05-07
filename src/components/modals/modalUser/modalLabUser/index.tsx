import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import OperatorFormEdit from "../newForm";
import UserList from "@/components/modals/modalUser/userList"
import './styles.css'


export default function ModalLabUser() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <button
        className="p-3 w-full text-lg text-left hover:bg-[#1976d2]"
        onClick={handleShow}
      >
        Usuários
      </button>

      <Modal show={showModal} onHide={handleClose} size="lg" className="mt-10">
        <Modal.Header closeButton>
          <Modal.Title> Usuários</Modal.Title>
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
                <UserList />
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