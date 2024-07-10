"use client";
import React, { useState } from "react";
import { Checkbox, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { IMaskInput } from "react-imask";
import { createContact } from "@/app/fecth/whatsApp";
import { useUserContext } from "@/context/userContext";
import { useMutation } from "@tanstack/react-query";
import { Mutacion } from "../card";

interface Contact {
  name: string;
  number: string;
  messageLowLevel?: string;
  messageCriticaLevel?: string;
  messageFueling?: string;
  lowLevel?: boolean;
  criticaLevel?: boolean;
  Fueling?: boolean;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const initialContactState: Contact = {
  name: "",
  number: "",
  messageLowLevel: "",
  messageCriticaLevel: "",
  messageFueling: "",
  criticaLevel: false,
  Fueling: false,
  lowLevel: false,
};
export const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);
const WhatsAppForm = () => {
  const [selectedContact, setSelectedContact] =
    useState<Contact>(initialContactState);
  const [lowLevel1, setLowLevel] = useState<boolean>(false);
  const [criticaLevel1, setCriticaLevel] = useState<boolean>(false);
  const [Fueling1, setFueling] = useState<boolean>(false);
  const { user } = useUserContext();

  const { mutate } = useMutation({
    mutationKey: ["WhatsApp"],
    mutationFn: ({ contact }: Mutacion) =>
      createContact(user?.system_id || 0, contact),
    onSuccess: () => {
      alert("Contato Criado com Sucesso!!");
    },
    onError: () => {
      alert("Erro ao Salvarr dados!!");
    },
  });

  const handleSaveEdit = () => {
    setSelectedContact({
      ...selectedContact,
      criticaLevel: criticaLevel1,
      Fueling: Fueling1,
      lowLevel: lowLevel1,
    });
    if (user) {
      mutate({
        contact: {
          ...selectedContact,
          criticaLevel: criticaLevel1,
          Fueling: Fueling1,
          lowLevel: lowLevel1,
        },
      });
    }

    console.log("Salvando alterações:", selectedContact);
    setSelectedContact(initialContactState);
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" sm:max-w-11/12 max-sm:w-full rounded overflow-hidden bg-white">
        <div className=" max-sm:w-full">
          <Typography
            variant="h5"
            align="center"
            className="text-gray-700 font-semibold mb-2"
          >
            Novo Contato
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
            <div className="mb-4 ">
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
                    checked={lowLevel1}
                    onChange={(e) => setLowLevel(e.target.checked)}
                    className="mr-1"
                  />
                  <Typography variant="body1" className="text-gray-700 mr-3">
                    Nível Baixo
                  </Typography>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Checkbox
                    id="criticaLevel"
                    checked={criticaLevel1}
                    onChange={(e) => setCriticaLevel(e.target.checked)}
                    className="mr-1"
                  />
                  <Typography variant="body1" className="text-gray-700 mr-3">
                    Nível Crítico
                  </Typography>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Checkbox
                    id="Fueling"
                    checked={Fueling1}
                    onChange={(e) => setFueling(e.target.checked)}
                    className="mr-1"
                  />
                  <Typography variant="body1" className="text-gray-700">
                    Em Abastecimento
                  </Typography>
                </div>
              </div>
            </div>
            <TextField
              style={{ display: lowLevel1 === false ? "none" : "" }}
              id="messageLowLevel"
              label="Menssagem de Nível Baixo"
              multiline
              value={selectedContact.messageLowLevel}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  messageLowLevel: e.target.value,
                })
              }
              className="mb-4"
              fullWidth
            />
            <TextField
              style={{ display: criticaLevel1 === false ? "none" : "" }}
              id="messageCriticaLevel"
              label="Menssagem de Nível Crítico"
              multiline
              value={selectedContact.messageCriticaLevel}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  messageCriticaLevel: e.target.value,
                })
              }
              className="mb-4"
              fullWidth
            />
            <TextField
              style={{ display: Fueling1 === false ? "none" : "" }}
              id="messageFueling"
              label="Menssagem de Abastecimento"
              multiline
              value={selectedContact.messageFueling}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  messageFueling: e.target.value,
                })
              }
              className="mb-4"
              fullWidth
            />

            <div className="flex justify-end ">
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
  );
};

export default WhatsAppForm;
