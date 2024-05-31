"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SettingsIcon from "@mui/icons-material/Settings";
import ModalLabDoctor from "@/components/modals/modalDoctor/modalLabDoctor";
import ModalLabOperador from "@/components/modals/modalOperator/modalLabOperator";
import ModalLabUser from "@/components/modals/modalUser/modalLabUser";
import { useUserContext } from "@/context/userContext";
import ModalForm from "@/components/waterParametersForm/ModalForm";

function SettingsModal() {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const { user } = useUserContext();
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
      <ModalForm
        showModalParm={show}
        handleCloseModalParm={handleClose}
        title="Responsavéis Técnicos"
      >
        <Modal.Body>
          <ModalLabDoctor />
          <ModalLabOperador />
          {user?.adm === true && <ModalLabUser />}
        </Modal.Body>
      </ModalForm>
    </>
  );
}

export default SettingsModal;
