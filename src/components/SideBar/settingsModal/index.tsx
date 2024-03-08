"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SettingsIcon from "@mui/icons-material/Settings";
import "../styles.css";



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
        <SettingsIcon/>
       Configuração
      </button>
    </div>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
        
         
         
        </Modal.Header>
        <Modal.Body>
       
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

export default  SettingsModal;
