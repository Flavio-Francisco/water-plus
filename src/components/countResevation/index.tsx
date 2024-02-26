import React, { useState, useEffect } from "react";
import "./styles.css";

interface Iprops {
  date: string;
}

const CounteResevation = ({ date }: Iprops) => {
  const [diasRestantes, setDiasRestantes] = useState<number>(0);
  const [cor, setCor] = useState<string>(""); // Inicialmente definida como vazia
  const [cor1, setCor1] = useState<string>("");

  function calcularDiasRestantes(dataInicial: string) {
    const hoje = new Date();
    const dataInicialDate = new Date(dataInicial);
    const diferencaTempo = dataInicialDate.getTime() - hoje.getTime();
    const diferencaDias = Math.ceil(diferencaTempo / (1000 * 3600 * 24)); // Convertendo milissegundos em dias
    return diferencaDias;
  }

  useEffect(() => {
    const dias = calcularDiasRestantes(date);
    setDiasRestantes(dias);
  }, [date]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (cor1 === "gray") {
      interval = setInterval(() => {
        setCor1(cor);
      }, 1000);
    } else {
      interval = setInterval(() => {
        setCor1("gray");
      }, 2000);
    }

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [cor1]);

  useEffect(() => {
    if (diasRestantes <= 10) {
      setCor("red");
    } else if (diasRestantes <= 20) {
      setCor("yellow");
    } else {
      setCor("green");
    }
  }, [diasRestantes]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <p style={{ textAlign: "center", padding: "10px", marginTop: 10 }}>
        Próxima Limpeza do Reservatório será
      </p>
      <div
        style={{
          background: cor1,
          width: 40,
          padding: "10px",
          borderRadius: "25px",
          color: "white",
          textAlign: "center",
          transition: "background-color 1s ease-in-out",
        }}
      >
        {diasRestantes}
      </div>
      <p style={{ textAlign: "center", padding: "10px", marginTop: 10 }}>
        dias.
      </p>
    </div>
  );
};

export default CounteResevation;
