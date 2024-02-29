import React from "react";
import ReservoirAnalysisForm from "@/components/analysis/resevoirForm";
import { Row } from "react-bootstrap";

export default function AnalysisReservoir() {
  return (
    <div>
      <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
        <h2 className="text-center">Resultados da Amostra do Reservatório </h2>
      </Row>
      <ReservoirAnalysisForm />
    </div>
  );
}
