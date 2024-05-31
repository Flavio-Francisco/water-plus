"use client";
import React, { useEffect } from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { fakeDiasafe } from "@/utils/models/Data";

import { styles } from "./styles";
import TableData from "../tableData";


export interface Machines {
  id: number;
  date: string;
  machine: string;
  system_id: number;
}
interface Iprops {
  data: Machines[];
}
const ReportDiasafe = ({ data }: Iprops) => {
  const date = new Date();

  useEffect(() => {
    console.log("esses ", fakeDiasafe);
  }, [fakeDiasafe]);
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.date}> Caruaru, {date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.h1}>
          <Text style={styles.title}>Relatorio de Troca de Diasafe</Text>
          <View style={styles.line} />

          <Text style={styles.text}>
            Relação dos Diasafe que foram trocados
          </Text>
        </View>
        <View style={{ width: "90%", height: "80%" }}>
          <TableData data={data} />
        </View>
      </Page>
    </Document>
  );
};

export default ReportDiasafe;
