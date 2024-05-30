"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModalTsx from "./ModalTsx";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "@/components/pdf";
import ReservoirClearning from "@/components/reportReservoirClearning";
import ReportDiasafe from "@/components/reportDiasafe";
import ReportApevisa from "@/components/reportApvisa";
import { ArrayApavise } from "@/utils/models/Data";

interface IProps {
  icon: React.ReactNode;
}

export default function DashboardTSX({ icon }: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };
  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };
  const handleOpenModal3 = () => {
    setOpenModal3(true);
  };
  const handleOpenModal4 = () => {
    setOpenModal4(true);
  };

  const handlecloseModal1 = () => {
    setOpenModal1(false);
  };
  const handlecloseModal2 = () => {
    setOpenModal2(false);
  };
  const handlecloseModal3 = () => {
    setOpenModal3(false);
  };
  const handlecloseModal4 = () => {
    setOpenModal4(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open === true ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open === true ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal1();
          }}
        >
          Mensal
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal2();
          }}
        >
          Limpeza Reservatórios
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal3();
          }}
        >
          Diasafe
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal4();
          }}
        >
          Apevisa
        </MenuItem>
      </Menu>

      <div>
        <ModalTsx
          fullWidth={true}
          open={openModal1}
          onClose={handlecloseModal1}
          maxWidth="xl"
        >
          <div className="w-full h-screen">
            <PDFViewer className="w-full h-full">
              <Pdf />
            </PDFViewer>
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal2}
          onClose={handlecloseModal2}
          maxWidth="xl"
        >
          <div className="w-full h-screen">
            <PDFViewer className="w-full h-full">
              <ReservoirClearning />
            </PDFViewer>
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal3}
          onClose={handlecloseModal3}
          maxWidth="xl"
        >
          <div className="w-full h-screen">
            <PDFViewer className="w-full h-full">
              <ReportDiasafe />
            </PDFViewer>
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal4}
          onClose={handlecloseModal4}
          maxWidth="xl"
        >
          <ReportApevisa reports={ArrayApavise} />
        </ModalTsx>
      </div>
    </div>
  );
}
