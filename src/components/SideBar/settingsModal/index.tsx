"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SettingsIcon from "@mui/icons-material/Settings";

import ModalLabChemist from "@/components/modals/modalChemist/modalLabChemist";
import ModalLabDoctor from "@/components/modals/modalDoctor/modalLabDoctor"
import ModalLabOperador from "@/components/modals/modalOperator/modalLabOperator"
import ModalLabUser from "@/components/modals/modalUser/modalLabUser"



function SettingsModal() {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const handleClose = () => {
    setShow(false);
    setActive(false);
  };

  const handleShow = () => setShow(true);

  const active = () => setActive(!isActive);

  return (
    <>
      <div>
        <button
          className={isActive ? "active" : "sidebar-nav"}
          onClick={() => {
            handleShow();
            active();
          }}
        >
          <SettingsIcon />
        </button>
      </div>

      <Modal show={show} onHide={handleClose} className="m-10">
        <Modal.Header>
          <Modal.Title>Responsavéis Técnicos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalLabChemist />
          <ModalLabDoctor />
          <ModalLabOperador />
          <ModalLabUser />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="text-gray-500"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;
