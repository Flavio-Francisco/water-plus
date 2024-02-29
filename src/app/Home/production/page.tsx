import React from "react";
import GraficProduction from "@/components/graficProtution";
import FormApvisa from "@/components/formApvisa";
import Line from "@/components/line";
import { dataProducao, calcularPorcentagem } from "@/utils/models/Data";
import { Row } from "react-bootstrap";

export default function Production() {
  const percentage = calcularPorcentagem(dataProducao?.data);

  return (
    <div
      className=" d-flex justify-content-center align-items-center flex-column "
      style={{ width: "95%" }}
    >
      <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
        <h2 className="text-center">Dados de Produção</h2>
      </Row>
      <Line />
      <GraficProduction
        data={dataProducao.data}
        title={dataProducao.title}
        subtitle={dataProducao.subtitle}
      />
      <Line />
      <div className="d-flex justify-content-center align-items-center mt-3">
        <p>Taxa de rejeito {percentage} </p>
      </div>
      <FormApvisa />
    </div>
  );
}
