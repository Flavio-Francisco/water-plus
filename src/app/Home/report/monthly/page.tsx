"use client"
import Pdf from "@/components/pdf";
import { PDFViewer } from '@react-pdf/renderer';
import React from "react";

const ReportMonthly = () => {
  return (
    <div style={{ width: "100%", height: 631 }}>
      <PDFViewer width={"100%"} height={"100%"}>
        <Pdf />
      </PDFViewer>
    </div>
  );
};
export default ReportMonthly;
