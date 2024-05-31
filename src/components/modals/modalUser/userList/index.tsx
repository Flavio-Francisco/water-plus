import React, { useState } from "react";
import UserForm from "@/components/modals/modalUser/editFrom";

import { UserModel } from "@/utils/models/userModel";
import "./styles.css";
import { Autocomplete, TextField } from "@mui/material";

interface Ipros {
  data: UserModel[] | undefined;
  refech: () => void;
  onUpdate: (success: boolean) => void;
}

const UserList = ({ data, onUpdate, refech }: Ipros) => {
  const [selectedUser, setSelectedUser] = useState<UserModel>();

  const handleOperatorChange = (
    event: React.ChangeEvent<object>,
    newValue: string | UserModel | null
  ) => {
    if (typeof newValue === "string") {
      const found = data?.find((a) => a.name === newValue) || null;

      setSelectedUser({
        id: found?.id || 0,
        name: found?.name || "",
        password: found?.password || "",
        adm: found?.adm || false,
        system_id: found?.system_id,
      })!;
    } else {
      setSelectedUser({
        id: newValue?.id,
        name: newValue?.name || "",
        password: newValue?.password || "",
        adm: newValue?.adm || false,
        system_id: newValue?.system_id,
      });
    }
  };

  return (
    <div className="container">
      <div className="conteinerList">
        <Autocomplete
          className="m-auto w-full mb-3 mt-4 md:w-4/6 max-md:w-4/5"
          value={selectedUser}
          onChange={handleOperatorChange}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={data || []} // Use array vazio se `pacientData` for `undefined`
          getOptionLabel={(option) => option.name || ""}
          renderInput={(params) => (
            <TextField {...params} label="Selecione o Usuário" />
          )}
        />

        {/* Renderiza o formulário de edição do usuário apenas se um usuário estiver selecionado */}
        {selectedUser && (
          <div className="form">
            <h5 className="h5">Editar Usuário</h5>
            <UserForm
              onUpdate={onUpdate}
              refech={refech}
              initialValues={selectedUser}
            />{" "}
            {/* Passa o usuário selecionado como initialValues para o formulário de edição */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
