"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ModalTsx from "@/components/Drawer/DashboardTSX/ModalTsx";
import ReservoirAnalysisFormEdit from "@/components/analysis/resevoirFormEdit";
import { ReservoirAnalysisInitialValuesEdite } from "@/components/analysis/resevoirFormEdit/validation";
import { useMutation } from "@tanstack/react-query";
import { deleteReservoir } from "@/app/fecth/resevatorir";
import { useUserContext } from "@/context/userContext";

interface IProps {
  icon: React.ReactNode;
  values: ReservoirAnalysisInitialValuesEdite;
  className?: string;
  refetch: () => void;
  onSucess: (sucess: boolean) => void;
}

export default function DashboardReservoir({
  icon,
  values,
  className,
  refetch,
  onSucess,
}: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const { user } = useUserContext();
  const { mutate, isPending } = useMutation({
    mutationKey: ["resevatorirForm"],
    mutationFn: () => deleteReservoir(user?.system_id || 0, values),
    onSuccess: (data) => {
      alert(data.message);
      setOpenModal1(false);
      onSucess(true);
    },
    onError: () => {
      alert("Erro ao deletar dados");
      setOpenModal1(false);
    },
  });
  const handleDelete = () => {
    mutate();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };
  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handlecloseModal1 = () => {
    setOpenModal1(false);
  };
  const handlecloseModal2 = () => {
    setOpenModal2(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onSucess1 = (sucess: boolean) => {
    if (sucess === true) {
      setOpenModal1(false);
      onSucess(true);
    }
  };

  return (
    <div>
      <button
        title="Editar ou Excluir"
        className={className}
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
          Editar
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal2();
          }}
        >
          Exluir
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
            <h2 className="text-center text-lg font-bold">Editar</h2>

            <ReservoirAnalysisFormEdit
              onSuccess={onSucess1}
              values={values}
              refetch={refetch}
            />
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal2}
          onClose={handlecloseModal2}
          maxWidth="xs"
        >
          <div className="w-full">
            <h1 className=" text-xl text-center font-bold mb-3">Excluir</h1>
            <p>
              Tem certeza de que deseja excluir essa ánalise? Esta ação não
              poderá ser desfeita.
            </p>
            <div className="flex justify-around items-center mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
                onClick={handleDelete}
                disabled={isPending}
              >
                {isPending ? "Excluindo..." : "Excluir"}
              </button>
              <button
                className="px-4 py-2 ml-4 bg-gray-300 text-white rounded-md hover:bg-gray-400"
                onClick={handlecloseModal2}
              >
                Cancelar
              </button>
            </div>
          </div>
        </ModalTsx>
      </div>
    </div>
  );
}
