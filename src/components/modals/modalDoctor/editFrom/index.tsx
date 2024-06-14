"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Doctor } from "@/utils/models/Credentials";
import { useDoctor } from "@/context/useDoctor";
import { useMutation } from "@tanstack/react-query";
import { updateDoctor } from "@/app/fecth/doctor";
import { Button } from "@mui/material";

const DoctorFormEdit: React.FC = () => {
  const { doctor } = useDoctor();
  const { mutate } = useMutation({
    mutationKey: ["doctorForm"],
    mutationFn: (values: Doctor) =>
      updateDoctor(doctor?.system_id || 0, values),
    onSuccess: () => {
      alert("Dados Atualizados com Sucesso!!!");
    },
    onError: () => {
      alert("Erro ao Atualizar Dados!!!");
    },
  });

  const [formData, setFormData] = useState<Doctor>({
    name: doctor?.name || "",
    CRM: doctor?.CRM || "",
    graduation: doctor?.graduation || "",
    postGraduation: doctor?.postGraduation || "",
    postGraduation2: doctor?.postGraduation2 || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    mutate(formData);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex  justify-center items-center  text-lg font-bold">
          <h1>Dados do Médico</h1>
        </div>
        <Form.Group controlId="formName" className="w-10/12">
          <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
            Nome
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Digite o nome do médico"
            value={doctor?.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCRM" className="w-10/12">
          <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
            CRM
          </Form.Label>
          <Form.Control
            type="text"
            name="CRM"
            placeholder="Digite o CRM do médico"
            value={doctor?.CRM}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGraduation" className="w-10/12">
          <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
            Graduação
          </Form.Label>
          <Form.Control
            type="text"
            name="graduation"
            placeholder="Digite a graduação do médico"
            value={doctor?.graduation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPostGraduation" className="w-10/12">
          <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
            Pós-Graduação
          </Form.Label>
          <Form.Control
            type="text"
            name="postGraduation"
            placeholder="Digite a pós-graduação do médico"
            value={doctor?.postGraduation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSecondPostGraduation" className="w-10/12">
          <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
            Segunda Pós-Graduação
          </Form.Label>
          <Form.Control
            type="text"
            name="postGraduation2"
            placeholder="Digite a segunda pós-graduação do médico"
            value={doctor?.postGraduation2}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="contained" type="submit" style={{ marginTop: 20 }}>
          Salvar
        </Button>
      </div>
    </Form>
  );
};

export default DoctorFormEdit;
