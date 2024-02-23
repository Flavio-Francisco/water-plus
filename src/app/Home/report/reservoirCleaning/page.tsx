"use client";
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ReservoirClearning from "@/components/reportReservoirClearning";

const PageReservoirCleaning = () => {
  return (
    <div style={{ width: "100%", height: "99vh" }}>
      <PDFViewer width={"100%"} height={"100%"}>
        <ReservoirClearning />
      </PDFViewer>
    </div>
  );
};
export default PageReservoirCleaning;
