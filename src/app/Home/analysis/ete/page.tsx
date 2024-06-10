"use client";
import React from "react";
import ResultForm from "@/components/formAnalysis";
import { Row } from "react-bootstrap";

export default function Purifiers() {
  return (
    <div className="mx-auto w-2/3">
      <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
        <h1 className="text-center font-bold">
          Resultados das Amostras dos Purificadores
        </h1>
      </Row>
      <ResultForm onSucess={() => {}} />
    </div>
  );
}
