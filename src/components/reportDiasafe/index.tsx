"use client";
import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

import { styles } from "./styles";
import TableData from "../tableData";

export interface Machines {
  id: number;
  date: string | Date;
  machine: string;
  system_id: number;
}
interface Iprops {
  data: Machines[];
}
const ReportDiasafe = ({ data }: Iprops) => {
  const date = new Date();

  return (
    <Document title="Relatorio de Troca de Diasafe">
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
