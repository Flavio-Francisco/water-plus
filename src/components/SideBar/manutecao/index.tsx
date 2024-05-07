import Counter from "@/components/count";
import CounteDisinfection from "@/components/counteDisinfection";
import CounteResevation from "@/components/countResevation";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import WarningIcon from "@mui/icons-material/Warning";
import { fakeReservoirCleaning } from "@/utils/models/Data";

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

      <Modal show={show} onHide={handleClose} className="mt-10">
        <Modal.Header closeButton>
          <Modal.Title>Procedimentos Agendados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Counter date={String(new Date())} />
            <CounteDisinfection date={String(new Date())} />
            <CounteResevation date={fakeReservoirCleaning.nextCleaning} />
          </div>
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

export default Maintenance;
