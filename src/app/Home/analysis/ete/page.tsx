import React from "react";
import ResultForm from "@/components/formAnalysis";
import { Row } from "react-bootstrap";

export default function Purifiers() {
  return (
    <div>
      <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
        <h2 className="text-center">
          Resultados das Amostras dos Purificadores
        </h2>
      </Row>
      <ResultForm />
    </div>
  );
}
