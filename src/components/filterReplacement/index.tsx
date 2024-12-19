/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Machines } from "../reportDiasafe";


import {
  deleteMachines,
  getMachines,
  updateMachines,
} from "@/app/fecth/diasafe";

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
interface Iprops {
  onSucess: (sucess: boolean) => void;
  id: number;
}

export default function FilterReplacement({ onSucess, id }: Iprops) {
  const {
    data: cachedData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["diasafeDB"],
    queryFn: () => getMachines(id || 0),
  });
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const [rows, setRows] = useState<Machines[] | undefined>(cachedData);

  const addNewMachine = () => {
    if (rows?.length || 0 >= 1) {
      const newMachine = {
        id: (rows?.length || cachedData) + 2,
        machine: "",
        date: "",
        system_id: id,
        editable: true,
      };
      setRows(() => [...(rows || []), newMachine]);
    }
  };
  const addNewMachineNew = () => {
    const newMachine = {
      id: (rows?.length || cachedData) + 2,
      machine: "",
      date: "",
      system_id: id,
      editable: true,
    };
    setRows(() => [...(rows || []), newMachine]);
  };

  const handleSaveClick = (id: GridRowId) => () => {
    const rowToSave = rows?.find((row) => row.id === id); // Busca os dados atualizados no estado
    if (rowToSave) {
      mutate(rowToSave); // Chama a mutação para salvar no banco
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
    mutationKey: ["diasafeForm"],
    mutationFn: (machine: Machines) => updateMachines(id, machine),

    onSuccess: () => {
      onSucess(false);
    },
    onError: () => {
      // onSucess(true);
    },
  });
  const { mutate: handleDeleteMachines } = useMutation({
    mutationKey: ["deleteMachine"],
    mutationFn: (machine: string) => deleteMachines(id, machine),
    onSuccess() {
      // onSucess(true);
      refetch();
    },
  });

  const columns: GridColDef[] = [
    {
      field: "machine",
      headerName: "Número de Seríe",
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
        const date = formatDatefilter(params);

        return date;
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
              onClick={handleSaveClick(id)}
              color="primary"
            >
              {isPending ? <CircularProgress size="20px" /> : <SaveIcon />}
            </IconButton>,
            <IconButton
              key="cancel"
              onClick={handleCancelClick(id)}
              color="inherit"
            >
              <CancelIcon />
            </IconButton>,
          ];
        }

        return [
          <IconButton key="edit" onClick={handleEditClick(id)} color="primary">
            <EditIcon />
          </IconButton>,
          <IconButton
            key="delete"
            onClick={handleDeleteClick(id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>,
          <IconButton key="add" color="primary" onClick={addNewMachine}>
            <AddIcon />
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
        (row: { date: string | number | Date }) => ({
          ...row,
          date: row.date ? new Date(row.date) : null,
        })
      );
      setRows(formattedData);
    }

    if (cachedData?.length < 1) {
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
    </Box>
  );
}
