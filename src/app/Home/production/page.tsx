import React from "react";
import GraficProduction from "@/components/graficProtution";
import Line from "@/components/line";
import { dataProducao, calcularPorcentagem } from "@/utils/models/Data";
import { Row } from "react-bootstrap";
import ListParametsProduction from "@/components/listParametensProduction";

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
      <Row style={{ width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginLeft:35 }}>
    <p style={{ width: "40%" ,marginLeft:35}}>Taxa de Permeado {percentage.permeated}</p>
    <p style={{ width: "40%" }}>Taxa de rejeito {percentage.reject}</p>
</Row>

      <Line />
      <GraficProduction
        data={dataProducao.data}
        title={dataProducao.title}
        subtitle={dataProducao.subtitle}
      />
      <Line />
      <div className="d-flex justify-content-center align-items-center mt-3">
     
      </div>
          <div className="w-100">
            <ListParametsProduction data={dataProducao.data} />
          </div>
    </div>
  );
}
