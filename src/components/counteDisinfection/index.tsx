import React, { useState, useEffect } from 'react';
import { useQueryClient } from "@tanstack/react-query";
import Line from "../line";
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
    <div className="flex flex-col justify-center items-center ">
      <p className="text-center p-3 font-bold text-xl">
        Tempo Para Próxima Desinfecção
      </p>
      <Line />
      <div className="flex flex-row justify-center items-center mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-3 rounded-full text-white  text-base font-bold mb-2">
            {tempoRestante.dias <= 0
              ? "Por favor Efetuar a Troca"
              : tempoRestante.dias}
          </div>
          {tempoRestante.dias <= 0 ? null : (
            <p className="text-center mb-2">dias</p>
          )}
        </div>
        {tempoRestante.dias <= 0 ? null : (
          <div className="flex flex-col items-center mx-4">
            <div className="bg-gray-800 p-3 rounded-full text-white text-base font-bold mb-2">
              {tempoRestante.horas}
            </div>
            <p className="text-center mb-2">horas</p>
          </div>
        )}
        {tempoRestante.dias <= 0 ? null : (
          <div className="flex flex-col items-center mx-2">
            <div className="bg-gray-800 p-3 rounded-full text-white text-base font-bold mb-2">
              {tempoRestante.minutos}
            </div>
            <p className="text-center mb-2">minutos</p>
          </div>
        )}
        {tempoRestante.dias <= 0 ? null : (
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-3 rounded-full text-white text-base font-bold mb-2">
              {tempoRestante.segundos}
            </div>
            <p className="text-center mb-2">segundos</p>
          </div>
        )}
      </div>
      <Line />
    </div>
  );
};

export default CounteDisinfection;
