import React from "@react-pdf/renderer";
import { FC } from "react";
import { Machines } from "../reportDiasafe";
const { View, Text, StyleSheet } = React;

const styles = StyleSheet.create({
  table: { width: "100%", borderCollapse: "collapse", marginLeft: 25 },
  row: { flexDirection: "row" },
  cell: {
    border: "1px solid #000",
    padding: 5,
    width: "50%",
    alignItems: "center",
  },
  headerCell: { backgroundColor: "#EEE" },
  text: { fontSize: 10, textAlig: "center" },
  h1: { fontSize: 10, textAlig: "center" },
});

interface IProps {
  data: Machines[];
}

const TableData: FC<IProps> = ({ data }) => {
  if (!Array.isArray(data)) {
    // Se data não for um array, você pode retornar um componente de erro ou um texto de aviso
    return <Text>Dados inválidos, esperava-se um array.</Text>;
  }

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.headerCell]}>
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.h1}>Data</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.h1}>Máquina</Text>
        </View>
      </View>
      {data.map((item, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.cell}>
            <Text style={styles.text}>{item.date}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>{item.machine}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TableData;
