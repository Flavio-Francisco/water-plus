"use client";
import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import ReportDiasafe from "@/components/reportDiasafe";

export default function Diasafe(){
    return(
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <ReportDiasafe/>
        </PDFViewer>
    )
}