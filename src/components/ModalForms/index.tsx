"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import FilterReplacement from "../filterReplacement";
import AcidReplacement from "../acidReplacement";
import Desinfection from "../disinfection";
import ModalTsx from "../Drawer/DashboardTSX/ModalTsx";
import { useQuery } from "@tanstack/react-query";
import { getDesinfection } from "@/app/fecth/desinfection";
import { useUserContext } from "@/context/userContext";


interface IProps {
  icon: React.ReactNode;
  openModal: boolean;
}

export default function ModalForms({ icon, openModal }: IProps) {
  const { user } = useUserContext();

  const { refetch } = useQuery({
    queryKey: ["desinfection"],
    queryFn: () => {
      if (user) {
        return getDesinfection(user?.system_id || 0);
      } else {
        return null;
      }
    },
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);

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
  const onSucess1 = (sucess: boolean) => {
    if (sucess === true) {
      setOpenModal1(false);
    }
  };
  const onSucess2 = (sucess: boolean) => {
    if (sucess === true) {
      setOpenModal2(false);
    }
  };
  const onSucess3 = (sucess: boolean) => {
    if (sucess === true) {
      setOpenModal3(false);
    }
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="flex flex-row "
        id="basic-button"
        aria-controls={open === true ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open === true ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
        <p
          style={{ display: openModal ? "" : "none" }}
          className="text-black ml-6"
        >
          Formulários
        </p>
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
          Desinfecção
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal2();
          }}
        >
          Ácido Peracético
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal3();
          }}
        >
          Diasafe
        </MenuItem>
      </Menu>

      <div>
        <ModalTsx
          fullWidth={false}
          open={openModal1}
          onClose={handlecloseModal1}
          maxWidth="xl"
        >
          <Desinfection
            onSucess={onSucess1}
            id={user?.system_id || 0}
            refetch={refetch}
          />
        </ModalTsx>
        <ModalTsx
          fullWidth={false}
          open={openModal2}
          onClose={handlecloseModal2}
          maxWidth="md"
          sx={{
            "& .MuiDialog-paper": {
              "@media (max-width: 700px)": {
                maxWidth: "100%",
                width: "100%",
                margin: 0.5,
              },
            },
          }}
        >
          <AcidReplacement
            onSucess={onSucess2}
            id={user?.system_id || 0}
            name={user?.name || ""}
          />
        </ModalTsx>
        <ModalTsx
          fullWidth={false}
          open={openModal3}
          onClose={handlecloseModal3}
          keepMounted={false}
          maxWidth="md"
          sx={{
            "& .MuiDialog-paper": {
              "@media (max-width: 700px)": {
                maxWidth: "100%",
                width: "100%",
                margin: 0.5,
              },
            },
          }}
        >
          <FilterReplacement onSucess={onSucess3} id={user?.system_id || 0} />
        </ModalTsx>
      </div>
    </div>
  );
}

