"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModalTsx from "../Drawer/DashboardTSX/ModalTsx";
import ChemistFormEdit from "../modals/modalChemist/editForm";
import { useChemist } from "@/context/useChermist";
import DoctorFormEdit from "../modals/modalDoctor/editFrom";
import LabTabs from "../modals/modalUI";
import OperatorFormNew from "../modals/modalOperator/editFrom";
import OperatorFormEdit from "../modals/modalOperator/newForm";
import ModalLabUser from "../modals/modalUser/modalLabUser";
import { useOperator } from "@/context/useOperator";

interface IProps {
  icon: React.ReactNode;
}

export default function ModalSetting({ icon }: IProps) {
  const { Chemist, refetch } = useChemist();

  const { operator, refetchOpetor } = useOperator();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);

  const handleUpdate = (success: boolean) => setOpenModal2(success);
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

  const onUpdate = () => {
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
          Químico Responsável
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal2();
          }}
        >
          {" "}
          Médico Responsável
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal3();
          }}
        >
          Operador Responsável
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal4();
          }}
        >
          Usuários
        </MenuItem>
      </Menu>

      <div>
        <ModalTsx
          fullWidth={true}
          open={openModal1}
          onClose={handlecloseModal1}
          maxWidth="sm"
        >
          <ChemistFormEdit
            data={
              Chemist || {
                CRM: "",
                graduation: "",
                id: 0,
                name: "",
                postGraduation: "",
                postGraduation2: "",
                system_id: 0,
              }
            }
            refech={refetch}
          />
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal2}
          onClose={handlecloseModal2}
          maxWidth="sm"
        >
          <DoctorFormEdit />
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal3}
          onClose={handlecloseModal3}
          maxWidth="sm"
        >
          <LabTabs
            ComponetNew={
              <div>
                <OperatorFormEdit
                  refech={refetchOpetor}
                  onUpdate={handleUpdate}
                  data={operator || []}
                />
              </div>
            }
            ComponetEdit={
              <div>
                <OperatorFormNew
                  refech={refetchOpetor}
                  onUpdate={handleUpdate}
                />
              </div>
            }
          />
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal4}
          onClose={handlecloseModal4}
          maxWidth="sm"
        >
          <ModalLabUser onUpdate={onUpdate} />
        </ModalTsx>
      </div>
    </div>
  );
}
