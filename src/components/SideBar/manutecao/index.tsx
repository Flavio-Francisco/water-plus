import Counter from "@/components/count";
import CounteDisinfection from "@/components/counteDisinfection";
import CounteResevation from "@/components/countResevation";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import WarningIcon from "@mui/icons-material/Warning";
import { fakeReservoirCleaning } from "@/utils/models/Data";
import ModalForm from "@/components/waterParametersForm/ModalForm";

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
      <ModalForm
        handleCloseModalParm={handleClose}
        showModalParm={show}
        title="Procedimentos Agendados"
      >
        <Modal.Body>
          <div>
            <Counter date={String(new Date())} />
            <CounteDisinfection date={String(new Date())} />
            <CounteResevation date={fakeReservoirCleaning.nextCleaning} />
          </div>
        </Modal.Body>
      </ModalForm>
    </>
  );
}

export default Maintenance;
