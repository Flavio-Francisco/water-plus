import React, { useState, useEffect } from 'react';
import { useQueryClient } from "@tanstack/react-query";
import { DesinfectionModel } from "@/utils/models/desifection";

const CounteDisinfection: React.FC = () => {
  const queryClient = useQueryClient();
  const date: DesinfectionModel | undefined = queryClient.getQueryData([
    "desinfection",
  ]);

  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });


useEffect(() => {
  if (date?.data1) {
    const interval = setInterval(() => {
      const hoje = new Date();
      const dataInicialDate = new Date(date?.data1 || "");

      const diferencaTempo =
        dataInicialDate.getTime() + 2628000000 - hoje.getTime();

      const absoluteDiferencaTempo = Math.abs(diferencaTempo); // Convert negative to positive
      const diferencaSegundos = Math.ceil(absoluteDiferencaTempo / 1000);
      const segundosRestantes = diferencaSegundos % 60;
      const minutosRestantes = Math.floor(diferencaSegundos / 60) % 60;
      const horasRestantes = Math.floor(diferencaSegundos / 3600) % 24;
      const diasRestantes = Math.floor(diferencaSegundos / (3600 * 24));

      setTempoRestante({
        dias: diasRestantes,
        horas: horasRestantes,
        minutos: minutosRestantes,
        segundos: segundosRestantes,
      });
    }, 1000);

    return () => clearInterval(interval);
  }
}, [date]);

return (
  <div className="flex flex-row justify-center items-center w-full  gap-3 border-b">
    <div className="flex justify-center items-center  h-full">
      <p className="text-center p-2 font-bold text-sm">Próxima desinfecção</p>
    </div>
    <div className="flex flex-row items-center mt-4">
      <div className="flex flex-col items-center">
        <div className="p-2 rounded border   text-base font-bold ">
          {tempoRestante.dias <= 0
            ? "Por favor Efetuar a Troca"
            : tempoRestante.dias}
        </div>
        {tempoRestante.dias <= 0 ? null : (
          <p className="text-center mb-2">dias</p>
        )}
      </div>
      {tempoRestante.dias <= 0 ? null : (
        <div>
          <div className="flex flex-row w-2/4 items-center mx-4">
            <div className=" pl-2 pb-0 pt-2  flex flex-row justify-end rounded-s border-l border-t border-b border-collapse  text-base font-bold  ">
              <p className=""> {tempoRestante.horas}</p>
              <p className="">:</p>
            </div>
            <div className="pb-0 pt-2 flex flex-row  border-t border-b border-collapse  text-base font-bold  gap-1">
              <p className=""> {tempoRestante.minutos}</p>
              <p className="">:</p>
            </div>
            <div className="pr-2 pb-0 pt-2  flex flex-row rounded-e border-r border-t border-b border-collapse  text-base font-bold  ">
              <p> {tempoRestante.segundos}</p>
            </div>
          </div>
          <p className="text-center mb-2">horas</p>
        </div>
      )}
    </div>
  </div>
);
};

export default CounteDisinfection;
