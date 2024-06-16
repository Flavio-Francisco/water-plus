"use client";
import { createReservoirAnalisys } from "@/app/fecth/resevatorir";
import { useUserContext } from "@/context/userContext";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
// components/ReservoirAnalysisForm.tsx
import React, { useState } from "react";

interface Iprops {
  onSucess: (sucess: boolean) => void;
}

export interface ReservoirAnalysisResults {
  date: string;
  sampleName: string;
  bicarbonateAlkalinity: string;
  carbonateAlkalinity: string;
  hydroxideAlkalinity: string;
  totalAlkalinity: string;
  aluminum: string;
  ammonia: string;
  calcium: string;
  chlorides: string;
  freeResidualChlorine: string;
  electricalConductivity: string;
  apparentColor: string;
  carbonateHardness: string;
  nonCarbonateHardness: string;
  totalHardness: string;
  totalIron: string;
  magnesium: string;
  manganese: string;
  nitrate: string;
  nitrite: string;
  dissolvedOxygen: string;
  pH: string;
  potassium: string;
  sodium: string;
  totalDissolvedSolids: string;
  sulfate: string;
  hydrogenSulfide: string;
  surfactants: string;
  totalColiforms: string;
  heterotrophicBacteriaCount: string;
  endotoxins: string;
}
const emptyResults: ReservoirAnalysisResults = {
  date: "",
  sampleName: "",
  bicarbonateAlkalinity: "",
  carbonateAlkalinity: "",
  hydroxideAlkalinity: "",
  totalAlkalinity: "",
  aluminum: "",
  ammonia: "",
  calcium: "",
  chlorides: "",
  freeResidualChlorine: "",
  electricalConductivity: "",
  apparentColor: "",
  carbonateHardness: "",
  nonCarbonateHardness: "",
  totalHardness: "",
  totalIron: "",
  magnesium: "",
  manganese: "",
  nitrate: "",
  nitrite: "",
  dissolvedOxygen: "",
  pH: "",
  potassium: "",
  sodium: "",
  totalDissolvedSolids: "",
  sulfate: "",
  hydrogenSulfide: "",
  surfactants: "",
  totalColiforms: "",
  heterotrophicBacteriaCount: "",
  endotoxins: "",
};

const ReservoirAnalysisForm: React.FC<Iprops> = ({ onSucess }) => {
  const { user } = useUserContext();
  const [open, setOpen] = React.useState(false);
  const { mutate } = useMutation({
    mutationKey: ["AnalyseForm"],
    mutationFn: (values: ReservoirAnalysisResults) =>
      createReservoirAnalisys(user?.system_id || 0, values),
    onSuccess: () => {
      alert("Dados Salvos com Sucesso!!!");
      handleClickOpen();
    },
    onError: () => {
      onSucess(true);
      alert("ERRO ao Salvar  Dados !!!");
    },
  });
  const handleClickOpen = () => {
    setFormData(emptyResults);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseButtom = (parms: boolean) => {
    setOpen(false);
    if (parms === true) {
      onSucess(true);
    }
  };
  const [formData, setFormData] = useState<ReservoirAnalysisResults>({
    date: "",
    sampleName: "",
    bicarbonateAlkalinity: "",
    carbonateAlkalinity: "",
    hydroxideAlkalinity: "",
    totalAlkalinity: "",
    aluminum: "",
    ammonia: "",
    calcium: "",
    chlorides: "",
    freeResidualChlorine: "",
    electricalConductivity: "",
    apparentColor: "",
    carbonateHardness: "",
    nonCarbonateHardness: "",
    totalHardness: "",
    totalIron: "",
    magnesium: "",
    manganese: "",
    nitrate: "",
    nitrite: "",
    dissolvedOxygen: "",
    pH: "",
    potassium: "",
    sodium: "",
    totalDissolvedSolids: "",
    sulfate: "",
    hydrogenSulfide: "",
    surfactants: "",
    totalColiforms: "",
    heterotrophicBacteriaCount: "",
    endotoxins: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    // Atualiza diretamente o campo no estado
    setFormData((prevData: ReservoirAnalysisResults) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
    mutate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
        <label className="block mb-4">
          <div className="flex sm:flex-row w-full justify-center items-center gap-3 max-sm:flex-col max-sm:w-full ">
            <span className="text-gray-700">Data da Coleta:</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-2/5  max-sm:w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Nome da amostra:</span>
          <input
            type="text"
            name="sampleName"
            value={formData.sampleName}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Alcalinidade do Bicarbonato:</span>
          <input
            type="text"
            name="bicarbonateAlkalinity"
            value={formData.bicarbonateAlkalinity}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Alcalinidade do Total:</span>
          <input
            type="text"
            name="totalAlkalinity"
            value={formData.totalAlkalinity}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Alcalinidade de Carbonato:</span>
          <input
            type="text"
            name="carbonateAlkalinity"
            value={formData.carbonateAlkalinity}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Alumínio:</span>
          <input
            type="text"
            name="aluminum"
            value={formData.aluminum}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Amônia:</span>
          <input
            type="text"
            name="ammonia"
            value={formData.ammonia}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Cálcio:</span>
          <input
            type="text"
            name="calcium"
            value={formData.calcium}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Cloreto:</span>
          <input
            type="text"
            name="chlorides"
            value={formData.chlorides}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Cloro Residual Livre:</span>
          <input
            type="text"
            name="freeResidualChlorine"
            value={formData.freeResidualChlorine}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Condutividade Elétrica:</span>
          <input
            type="text"
            name="electricalConductivity"
            value={formData.electricalConductivity}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Cor Aparente:</span>
          <input
            type="text"
            name="apparentColor"
            value={formData.apparentColor}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Dureza do Carbonato:</span>
          <input
            type="text"
            name="carbonateHardness"
            value={formData.carbonateHardness}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Dureza Não-Carbonato:</span>
          <input
            type="text"
            name="nonCarbonateHardness"
            value={formData.nonCarbonateHardness}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Dureza Total:</span>
          <input
            type="text"
            name="totalHardness"
            value={formData.totalHardness}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Ferro Total:</span>
          <input
            type="text"
            name="totalIron"
            value={formData.totalIron}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Magnésio:</span>
          <input
            type="text"
            name="magnesium"
            value={formData.magnesium}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Manganês:</span>
          <input
            type="text"
            name="manganese"
            value={formData.manganese}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Nitrato:</span>
          <input
            type="text"
            name="nitrate"
            value={formData.nitrate}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Nitrito:</span>
          <input
            type="text"
            name="nitrite"
            value={formData.nitrite}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Oxigênio Dissolvido:</span>
          <input
            type="text"
            name="dissolvedOxygen"
            value={formData.dissolvedOxygen}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">pH:</span>
          <input
            type="text"
            name="pH"
            value={formData.pH}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Potássio:</span>
          <input
            type="text"
            name="potassium"
            value={formData.potassium}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Sódio:</span>
          <input
            type="text"
            name="sodium"
            value={formData.sodium}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Sólidos Dissolvidos Totais:</span>
          <input
            type="text"
            name="totalDissolvedSolids"
            value={formData.totalDissolvedSolids}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Sulfato:</span>
          <input
            type="text"
            name="sulfate"
            value={formData.sulfate}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Sulfeto de Hidrogênio:</span>
          <input
            type="text"
            name="hydrogenSulfide"
            value={formData.hydrogenSulfide}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">hidróxido Alcalinidade:</span>
          <input
            type="text"
            name="hydroxideAlkalinity"
            value={formData.hydroxideAlkalinity}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Surfactantes:</span>
          <input
            type="text"
            name="surfactants"
            value={formData.surfactants}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Coliformes Totais:</span>
          <input
            type="text"
            name="totalColiforms"
            value={formData.totalColiforms}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">
            Contagem de Bactérias Heterotróficas:
          </span>
          <input
            type="text"
            name="heterotrophicBacteriaCount"
            value={formData.heterotrophicBacteriaCount}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Endotoxinas:</span>
          <input
            type="text"
            name="endotoxins"
            value={formData.endotoxins}
            onChange={handleChange}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Deseja Adicionar Mais Dados?</DialogTitle>
        <div className="flex flex-row justify-around mb-4">
          <Button
            variant="contained"
            color="success"
            onClick={() => handleCloseButtom(false)}
          >
            Sim
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleCloseButtom(true)}
          >
            Não
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default ReservoirAnalysisForm;



