import Counter from "@/components/count";
import CounteDisinfection from "@/components/counteDisinfection";
import CounteResevation from "@/components/countResevation";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import WarningIcon from "@mui/icons-material/Warning";
import ModalTsx from "@/components/Drawer/DashboardTSX/ModalTsx";

function Maintenance() {
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
      <button
        className={isActive ? "active" : "sidebar-nav"}
        onClick={() => {
          handleShow();
          active();
        }}
      >
        <WarningIcon />
      </button>
      <ModalTsx onClose={handleClose} open={show}>
        <Modal.Body>
          <div className="flex justify-center items-center">
            <p className="font-bold text-2xl">Procedimentos</p>
          </div>
          <div>
            <Counter />
            <CounteDisinfection />
            <CounteResevation />
          </div>
        </Modal.Body>
      </ModalTsx>
    </>
  );
}

export default Maintenance;
