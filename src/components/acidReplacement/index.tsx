/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Machines } from "../reportDiasafe";
import { FaRegFilePdf } from "react-icons/fa";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
} from "@mui/x-data-grid";
import { CircularProgress, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Close";
import Loader from "../loader/page";
import { formatDatefilter } from "@/utils/functions/FormateDate";
import { createAcid, deleteAcid, getAcid, updateAcid } from "@/app/fecth/acid";
import ModalTsx from "../Drawer/DashboardTSX/ModalTsx";
import ReportAcid from "../reportAcid";
interface Iprops {
  onSucess: (sucess: boolean) => void;
  id: number;
  name: string;
}

export default function AcidReplacement({ onSucess, id, name }: Iprops) {
  const [open, setOpen] = React.useState(false);
  const {
    data: cachedData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["acidDB"],
    queryFn: () => getAcid(id || 0),
  });
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const [rows, setRows] = useState<Machines[] | undefined>(cachedData);
  const addNewMachine = () => {
    // Certifica-se de que rows é um array e cachedData é um número
    const rowsLength = Array.isArray(rows) ? rows.length : 0;
    const cachedLength = typeof cachedData === "number" ? cachedData : 0;

    // Verifica se rows tem ao menos um item ou cachedData não é nulo
    if (rowsLength >= 1 || cachedData !== null) {
      const newMachine = {
        id: rowsLength + cachedLength + 2,
        machine: "",
        date: "",
        system_id: id,
        editable: true,
      };
      setRows((prevRows) => [...(prevRows || []), newMachine]);
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const onclose = () => {
    setOpen(false);
  };
  const addNewMachineNew = () => {
    // Certifica-se de que rows é um array e cachedData é um número
    const rowsLength = Array.isArray(rows) ? rows.length : 0;
    const cachedLength = typeof cachedData === "number" ? cachedData : 0;

    // Verifica se rows tem ao menos um item ou cachedData não é nulo
    if (rowsLength >= 1 || cachedData !== null) {
      const newMachine = {
        id: rowsLength + cachedLength + 2,
        machine: "",
        date: "",
        system_id: id,
        editable: true,
      };
      setRows((prevRows) => [...(prevRows || []), newMachine]);
    }
  };

  const handleSaveClick = (id: GridRowId) => () => {
    console.log(GridRowModes.View);
    const rowToSave = rows?.find((row) => row.id === id); // Busca os dados atualizados no estado
    if (rowToSave) {
      newAcid(rowToSave); // Chama a mutação para salvar no banco
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    }
  };

  // Lidar com edição das linhas
  const handleEditClick = (id: any) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  // Lidar com o cancelamento
  const handleCancelClick = (id: any) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };
  const { mutate, isPending } = useMutation({
    mutationKey: ["acidForm"],
    mutationFn: (machine: Machines) => updateAcid(id, machine),

    onSuccess: () => {
      onSucess(false);
    },
    onError: () => {
      // onSucess(true);
    },
  });
  const { mutate: newAcid } = useMutation({
    mutationKey: ["acidForm"],
    mutationFn: (machine: Machines) => createAcid(id, machine),

    onSuccess: () => {
      onSucess(false);
      refetch();
    },
    onError: () => {
      // onSucess(true);
    },
  });

  const { mutate: handleDeleteMachines } = useMutation({
    mutationKey: ["deleteacid"],
    mutationFn: (machine: string) => deleteAcid(id, machine),
    onSuccess() {
      // onSucess(true);
      refetch();
    },
  });

  const columns: GridColDef[] = [
    {
      field: "machine",
      headerName: "Nº de Seríe",
      editable: true,
      flex: 1,
    },
    {
      field: "date",
      type: "date",
      headerName: "Data da Troca",
      editable: true,
      flex: 1,
      valueFormatter: (params: Date) => {
        if (params) {
          const date = formatDatefilter(params);

          return date;
        }
      },
    },

    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 1,

      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <IconButton
              key="save"
              title="salvar"
              onClick={handleSaveClick(id)}
              color="primary"
            >
              {isPending ? <CircularProgress size="20px" /> : <SaveIcon />}
            </IconButton>,
            <IconButton
              key="cancel"
              title="cancelar"
              onClick={handleCancelClick(id)}
              color="inherit"
            >
              <CancelIcon />
            </IconButton>,
          ];
        }

        return [
          <IconButton
            key="edit"
            title="editar"
            onClick={handleEditClick(id)}
            color="primary"
          >
            <EditIcon />
          </IconButton>,
          <IconButton
            key="delete"
            title="excluir"
            onClick={handleDeleteClick(id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>,
        ];
      },
    },
  ];

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows((prevRows) => prevRows?.filter((row) => row.id !== id));
    const delet = rows?.filter((row) => row.id === id);
    if (delet) {
      handleDeleteMachines((delet[0] || []).machine);
    }

    setRowModesModel((prevModel) => {
      const updatedModes = { ...prevModel };

      delete updatedModes[id];
      return updatedModes;
    });
  };

  const processRowUpdate = (updatedRow: Machines) => {
    // Envie a linha atualizada para o backend usando a mutação
    mutate(updatedRow, {});

    // Atualiza o estado local (frontend) também
    setRows(() =>
      rows?.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );

    return updatedRow; // Retorna a linha processada
  };

  const handleRowModesModelChange = (newModel: GridRowModesModel) => {
    setRowModesModel(newModel);
  };

  useEffect(() => {
    if (cachedData) {
      const formattedData = cachedData.map(
        (row: {
          date: string | number | Date;
          id: number;
          machine: string;
          system_id: number;
        }) => ({
          ...row,
          date: row.date ? new Date(row.date) : new Date(),
        })
      );
      setRows(formattedData);
    }

    if (cachedData !== undefined && cachedData.length < 1) {
      addNewMachineNew();
    }
  }, [cachedData]);
  return (
    <Box>
      {isLoading || rows === undefined ? (
        <div className="w-[400px] h-full">
          <Loader />
        </div>
      ) : (
        <div className="relative ">
          <div className="flex justify-center items-center p-3">
            <h1 className=" text-xl text-[#1976D2]">Ácido Peracético</h1>
            <div className="absolute left-0 top-1 p-0 ">
              <button
                className="ml-2 p-2 hover:bg-slate-100"
                style={{
                  border: "0.3px solid #1976D2",
                  borderColor: "#1976D2",
                  borderRadius: "100px",
                }}
                onClick={handleOpen}
              >
                <FaRegFilePdf size={25} style={{ color: "#1976D2" }} />
              </button>
            </div>
            <div
              className="absolute right-0 top-0 "
              style={{
                border: "0.3px solid #22c55e",
                borderColor: "#22c55e",
                borderRadius: "100px",
              }}
            >
              <IconButton
                title="adicionar"
                key="add"
                style={{
                  color: "#22c55e",
                }}
                onClick={addNewMachine}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <DataGrid
            rows={rows}
            loading={isLoading}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            processRowUpdate={processRowUpdate}
          />
        </div>
      )}
      <ModalTsx
        open={open}
        onClose={onclose}
        fullWidth={true}
        maxWidth={"xl"}
        sx={{ height: "100%" }}
      >
        <div className="w-full h-screen">
          <PDFViewer className="w-full h-full">
            <Document title="Troca de Ácido Peracético">
              <Page size="A4" orientation="landscape">
                <ReportAcid data={cachedData || []} name={name} id={id} />
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </ModalTsx>
    </Box>
  );
}
