"use client";
import Pdf from "@/components/pdf";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";

const ReportMonthly = () => {
  return (
    <div className="w-full h-screen">
    <PDFViewer className="w-full h-full">
      <Pdf />
    </PDFViewer>
  </div>
  
  );
};
export default ReportMonthly;
