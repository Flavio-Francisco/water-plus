"use client";
import React from "react";
import ReservoirAnalysisForm from "@/components/analysis/resevoirForm";
import { Row } from "react-bootstrap";

export default function AnalysisReservoir() {
  return (
    <div className="ml-100 my-5 md:mx-auto md:my-auto md:w-4/5 md:ml-auto md:mr-auto">
      <Row>
        <h2 className="text-center">Resultados da Amostra do Reservatório </h2>
      </Row>
      <ReservoirAnalysisForm onSucess={() => {}} />
    </div>
  );
}
