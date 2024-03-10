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
      <button className="button" onClick={handleShow}>
        Usuários
      </button>

      <Modal show={showModal} onHide={handleClose} size="lg" >
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
  )
}