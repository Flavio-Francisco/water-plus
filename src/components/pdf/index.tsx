import React, { useRef } from "react";
import generatePDF from "react-to-pdf";

const Pdf = () => {
  const targetRef = useRef(null); // Inicializando useRef com null
  return (
    <div>
      <button onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}>
        Download PDF
      </button>
      <div ref={targetRef}>Content to be included in the PDF</div>
    </div>
  );
};
export default Pdf;
