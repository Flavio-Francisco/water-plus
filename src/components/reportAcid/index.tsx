// ReportAcidDocument.tsx
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import TableAcid from "../tableAcid";

export interface Machines {
  id: number;
  date: string | Date;
  machine: string;
  system_id: number;
}

interface IProps {
  data: Machines[];
}

const ReportAcidDocument = ({ data }: IProps) => {
  const date = new Date();

  // Divide os dados em grupos de 20
  const groupedData = data.reduce((acc: Machines[][], item, index) => {
    const groupIndex = Math.floor(index / 20); // Cada grupo tem 20 itens
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(item);
    return acc;
  }, []);

  return (
    <>
      {groupedData.map((group, index) => (
        <View style={styles.body} key={index}>
          <View style={styles.header}>
            <Text style={styles.date}>
              Caruaru, {date.toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.h1}>
            <Text style={styles.title}>Relatório de Troca dos Ácido</Text>
            <View style={styles.line} />
            <Text style={styles.text}>Relação dos Ácidos</Text>
          </View>
          <View style={{ width: "90%", height: "80%" }}>
            <TableAcid data={group} />
          </View>
        </View>
      ))}
    </>
  );
};

export default ReportAcidDocument;
