"use client";
import React, { useState } from "react";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";
import {
  Checkbox,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { WhatsAppDB } from "@/utils/models/whatsApp";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserContext } from "@/context/userContext";
import { deleteContat, getContact, updaSetContact } from "@/app/fecth/whatsApp";
import { TextMaskCustom } from "../form";
import Loader from "@/components/loader/page";

const initialContactState: WhatsAppDB = {
  name: "",
  number: "",
  messageLowLevel: "",
  messageCriticaLevel: "",
  messageFueling: "",
  criticaLevel: false,
  Fueling: false,
  lowLevel: false,
};
export interface Mutacion {
  id?: number | undefined;
  contact: WhatsAppDB;
}

const WhatsAppCard = () => {
  const { user } = useUserContext();
  const { data, refetch, isLoading } = useQuery<WhatsAppDB[]>({
    queryKey: ["WhatsAppGet"],
    queryFn: () => getContact(user?.system_id || 0),
  });

  const { mutate } = useMutation({
    mutationKey: ["WhatsApp"],
    mutationFn: ({ id, contact }: Mutacion) => updaSetContact(id || 0, contact),
    onSuccess: () => {
      alert("Contato Atualizado com Sucesso!!");
      refetch();
    },
    onError: () => {
      alert("Erro ao Atualizar dados!!");
    },
  });
  const { mutate: mutateDelete } = useMutation({
    mutationKey: ["WhatsAppDelete"],
    mutationFn: (id: number) => deleteContat(id || 0),
    onSuccess: () => {
      alert("Contato Apagado com Sucesso!!");
      refetch();
    },
    onError: () => {
      alert("Erro ao Apagado dados!!");
    },
  });
  const [selectedContact, setSelectedContact] =
    useState<WhatsAppDB>(initialContactState);
  const [lowLevel, setLowLevel] = useState<boolean | undefined>(undefined);
  const [criticaLevel, setCriticaLevel] = useState<boolean | undefined>(
    undefined
  );
  const [Fueling, setFueling] = useState<boolean | undefined>(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => {
    setDialogOpen(true);
  };
  const handleCloseDelete = () => {
    setDialogOpen(false);
  };
  const handleContactClick = (contact: WhatsAppDB) => {
    setSelectedContact(contact);
    setIsEditing(true);
    setLowLevel(contact.lowLevel);
    setCriticaLevel(contact.criticaLevel);
    setFueling(contact.Fueling);
  };

  const handleCancelEdit = () => {
    setSelectedContact(initialContactState);
    setIsEditing(false);
    setLowLevel(undefined);
    setCriticaLevel(undefined);
    setFueling(undefined);
  };

  const handleSaveEdit = () => {
    setSelectedContact({
      ...selectedContact,
      criticaLevel,
      Fueling,
      lowLevel,
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
    if (selectedContact.id) {
      mutate({
        id: selectedContact.id,
        contact: {
          ...selectedContact,
          messageLowLevel:
            lowLevel === true ? selectedContact.messageLowLevel : "",
          messageCriticaLevel:
            criticaLevel === true ? selectedContact.messageCriticaLevel : "",
          messageFueling:
            Fueling === true ? selectedContact.messageFueling : "",
          criticaLevel,
          Fueling,
          lowLevel,
        },
      });
    }

    console.log("Salvando alterações:", selectedContact);
    setSelectedContact(initialContactState);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (selectedContact.id) {
      mutateDelete(selectedContact.id);
    }
    setDialogOpen(false);
  };
  return (
    <div className="flex justify-center items-center max-sm:w-full">
      <div className=" max-w-11/12 rounded overflow-hidden bg-white max-sm:w-full">
        <div style={{ display: isEditing ? "none" : "" }}>
          <Typography
            variant="h5"
            align="center"
            className="text-gray-700 font-semibold mb-2 "
          >
            Contatos
          </Typography>
          {(data || [])?.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className=" bg-sky-100 p-4 rounded shadow-lg hover:bg-sky-200 cursor-pointer mt-2"
            >
              <Typography
                variant="body1"
                className="text-gray-700 max-sm:flex max-sm:flex-col whitespace-nowrap"
              >
                <strong>Nome:</strong> <p>{contact.name}</p>
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-700 whitespace-nowrap max-sm:flex max-sm:flex-col"
              >
                <strong>Número:</strong> <p>{contact.number}</p>
              </Typography>
              <div className="flex flex-col gap-1 max-sm:flex-col max-sm:gap-1 max-sm:mt-1">
                <Typography
                  variant="body1"
                  className="text-gray-700 font-semibold text-center"
                >
                  <strong>Enviar Mensagem Quando:</strong>
                </Typography>
                <div className="flex sm:flex-row max-sm:flex-col gap-3 max-sm:gap-1">
                  <div>
                    <Typography>
                      Nível Baixo{" "}
                      {contact.lowLevel ? (
                        <ModeStandbyOutlinedIcon
                          fontSize="small"
                          color="primary"
                        />
                      ) : (
                        <PanoramaFishEyeOutlinedIcon
                          fontSize="small"
                          color="primary"
                        />
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      Nível Crítico{" "}
                      {contact.criticaLevel ? (
                        <ModeStandbyOutlinedIcon
                          fontSize="small"
                          color="primary"
                        />
                      ) : (
                        <PanoramaFishEyeOutlinedIcon
                          fontSize="small"
                          color="primary"
                        />
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      Abastecimento{" "}
                      {contact.Fueling ? (
                        <ModeStandbyOutlinedIcon
                          fontSize="small"
                          color="primary"
                        />
                      ) : (
                        <PanoramaFishEyeOutlinedIcon
                          fontSize="small"
                          color="primary"
                        />
                      )}
                    </Typography>
                  </div>
                </div>
              </div>
              <Typography
                style={{ display: contact.lowLevel === false ? "none" : "" }}
                variant="body1"
                className="text-gray-700 mt-2 "
              >
                <strong>Mensagem Nível </strong>
                <strong>Baixo:</strong>
                <p>{contact.messageLowLevel}</p>
              </Typography>
              <Typography
                style={{
                  display: contact.criticaLevel === false ? "none" : "",
                }}
                variant="body1"
                className="text-gray-700 mt-2"
              >
                <strong>Mensagem Nível </strong>
                <strong>Crítico:</strong>
                <p>{contact.messageCriticaLevel}</p>
              </Typography>
              <Typography
                style={{ display: contact.Fueling === false ? "none" : "" }}
                variant="body1"
                className="text-gray-700 mt-2"
              >
                <strong>Mensagem de </strong>
                <strong className="max-sm:text-center">Abastecimento:</strong>
                <p> {contact.messageFueling}</p>
              </Typography>
            </div>
          ))}
        </div>
        {isEditing && (
          <div className="flex justify-center items-center">
            <div className=" sm:max-w-11/12 max-sm:w-full  bg-white">
              <div className=" max-sm:w-full">
                <Typography
                  variant="h5"
                  align="center"
                  className="text-gray-700 font-semibold mb-2"
                >
                  Editar Contato
                </Typography>
                <form className="bg-sky-100 p-4 rounded shadow-lg">
                  <TextField
                    id="name"
                    label="Nome"
                    value={selectedContact.name}
                    onChange={(e) =>
                      setSelectedContact({
                        ...selectedContact,
                        name: e.target.value,
                      })
                    }
                    className="mb-4"
                    fullWidth
                  />
                  <TextField
                    id="number"
                    label="Número"
                    value={selectedContact.number}
                    onChange={(e) =>
                      setSelectedContact({
                        ...selectedContact,
                        number: e.target.value,
                      })
                    }
                    InputProps={{
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      inputComponent: TextMaskCustom as any,
                    }}
                    className="mb-4"
                    fullWidth
                  />
                  <div className="mb-4">
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold mb-2"
                    >
                      Enviar Mensagem Quando:
                    </Typography>
                    <div className="flex items-start mb-2 whitespace-nowrap max-sm:flex-col">
                      <div className="flex flex-row justify-center items-center">
                        <Checkbox
                          id="lowLevel"
                          checked={lowLevel || false}
                          onChange={() => setLowLevel(!lowLevel)}
                          className="mr-1"
                        />
                        <Typography
                          variant="body1"
                          className="text-gray-700 mr-3"
                        >
                          Nível Baixo
                        </Typography>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <Checkbox
                          id="criticaLevel"
                          checked={criticaLevel || false}
                          onChange={() => setCriticaLevel(!criticaLevel)}
                          className="mr-1"
                        />
                        <Typography
                          variant="body1"
                          className="text-gray-700 mr-3"
                        >
                          Nível Crítico
                        </Typography>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <Checkbox
                          id="Fueling"
                          checked={Fueling || false}
                          onChange={() => setFueling(!Fueling)}
                          className="mr-1"
                        />
                        <Typography variant="body1" className="text-gray-700">
                          Abastecimento
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <TextField
                    style={{
                      display: lowLevel === false ? "none" : "",
                    }}
                    id="messageLowLevel"
                    label="Menssagem de Nível Baixo"
                    multiline
                    value={selectedContact.messageLowLevel}
                    onChange={(e) =>
                      setSelectedContact({
                        ...selectedContact,
                        messageLowLevel:
                          lowLevel === false ? "" : e.target.value,
                      })
                    }
                    className="mb-4"
                    fullWidth
                  />

                  <TextField
                    style={{
                      display: criticaLevel === false ? "none" : "",
                    }}
                    id="messageCriticaLevel"
                    label="Menssagem de Nível Crítico"
                    multiline
                    value={selectedContact.messageCriticaLevel}
                    onChange={(e) =>
                      setSelectedContact({
                        ...selectedContact,
                        messageCriticaLevel:
                          criticaLevel === false ? "" : e.target.value,
                      })
                    }
                    className="mb-4"
                    fullWidth
                  />
                  <TextField
                    style={{
                      display: Fueling === false ? "none" : "",
                    }}
                    id="messageFueling"
                    label="Menssagem de Abastecimento"
                    multiline
                    value={selectedContact.messageFueling}
                    onChange={(e) =>
                      setSelectedContact({
                        ...selectedContact,
                        messageFueling: Fueling === false ? "" : e.target.value,
                      })
                    }
                    className="mb-4"
                    fullWidth
                  />
                  <div className="flex justify-end gap-2 max-sm:flex-col ">
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleCancelEdit}
                      className="mr-2"
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleOpen}
                      className="mr-2"
                    >
                      Apagar
                    </Button>

                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleSaveEdit}
                    >
                      Salvar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleCloseDelete}
      >
        <DialogTitle textAlign={"center"}>Excluir Contato</DialogTitle>
        <DialogContent className="w-11/12">
          <div className="mt-2 bg-gray-100 rounded text-center gap-4 w-full">
            <p className="mt-1">Tem certeza que vai </p>
            <p className="mt-1">apagar o contato de </p>
            <p className="font-semibold mt-1">{selectedContact.name}</p>
            <div className="flex flex-row justify-center items-center">
              <p className="mt-1 ">com número: </p>
              <p className="font-semibold mt-1 ml-1">
                {" "}
                {selectedContact.number}{" "}
              </p>
            </div>
          </div>
        </DialogContent>
        <div className="flex justify-evenly items-center flex-row mb-2">
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Exluir
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleCloseDelete}
          >
            Cancelar
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default WhatsAppCard;
