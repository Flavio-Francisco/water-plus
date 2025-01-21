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
  name: string;
  id: number;
}

const ReportAcidDocument = ({ data, name, id }: IProps) => {
  const date = new Date();

  // Divide os dados em grupos de 20
  const groupedData = data.reduce((acc: Machines[][], item, index) => {
    const groupIndex = Math.floor(index / 11); // Cada grupo tem 20 itens
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

          <View style={{ width: "90%", height: "95%", marginTop: 0 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                fontSize: 22,

                marginLeft: 10,
              }}
            >
              <Text style={styles.title}>Relatório de Troca dos Ácido</Text>
            </View>
            <TableAcid data={group} name={name} id={id} />
          </View>
        </View>
      ))}
    </>
  );
};

export default ReportAcidDocument;
