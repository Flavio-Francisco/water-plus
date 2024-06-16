"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModalTsx from "../DashboardTSX/ModalTsx";

import ReservoirAnalysisForm from "@/components/analysis/resevoirForm";
import ResultForm from "@/components/formAnalysis";
import FormApvisa from "@/components/formApvisa";

interface IProps {
  icon: React.ReactNode;
}

export default function Dashboard({ icon }: IProps) {
  //const { user } = useUserContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);

  // const { mutate, data: i } = useMutation({
  //   mutationKey: ["resevatorirForm"],
  //   mutationFn: (date: string) => createReservoir(user?.system_id || 0, date),
  // });
  // const queryClient = useQueryClient();

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
          Reservatórios
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal2();
          }}
        >
          ETA
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal3();
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
          maxWidth="sm"
        >
          <div className="">
            <h2 className="text-center text-lg font-bold">
              Resultados da Amostra do Reservatório{" "}
            </h2>

            <ReservoirAnalysisForm onSucess={onSucess1} />
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal2}
          onClose={handlecloseModal2}
          maxWidth="xs"
        >
          <div className="w-full">
            <h1 className="text-center font-bold">
              Resultados das Amostras dos ETA
            </h1>

            <ResultForm onSucess={onSucess2} />
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal3}
          onClose={handlecloseModal3}
          maxWidth="md"
        >
          <div>
            <FormApvisa onSucess={onSucess3} />
          </div>
        </ModalTsx>
      </div>
    </div>
  );
}
