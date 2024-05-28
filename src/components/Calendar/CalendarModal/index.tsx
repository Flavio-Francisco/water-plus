"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useEventInput } from "@/context/eventContext";
import Calendar from "..";
import { Dialog } from "@mui/material";

function CalendarModal() {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const { events } = useEventInput();
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
          <CalendarMonthOutlinedIcon />
        </button>
      </div>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={show}
        onClose={handleClose}
      >
        <Modal.Body className="max-sm:flex max-sm:justify-center max-sm:items-center">
          <Calendar events={events || []} />
        </Modal.Body>
      </Dialog>
    </>
  );
}

export default CalendarModal;
