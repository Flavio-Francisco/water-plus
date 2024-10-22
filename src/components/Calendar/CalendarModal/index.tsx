"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
//import { useEventInput } from "@/context/eventContext";
import Calendar from "..";
import { Dialog } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/loader/page";
import { getEventsDB } from "@/app/fecth/events";
import { useUserContext } from "@/context/userContext";

function CalendarModal() {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const { user } = useUserContext();
  const handleClose = () => {
    setShow(false);
    setActive(false);
  };
  const { data: initialEvents, isLoading } = useQuery({
    queryKey: ["events", user?.system_id],
    queryFn: () => getEventsDB(user?.system_id || 0),
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="m-auto flex flex-col justify-center items-center">
          <div className="m-auto">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

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
          <Calendar events={initialEvents || []} />
        </Modal.Body>
      </Dialog>
    </>
  );
}

export default CalendarModal;
