"use client";
import React from "@react-pdf/renderer";
import { FC } from "react";
import { Machines } from "../reportDiasafe";
import { formatDate } from "@/utils/functions/FormateDate";

const { View, Text, StyleSheet } = React;

const styles = StyleSheet.create({
  table: {
    width: "100%",
    marginLeft: 25,
    padding: 5,
    marginBottom: 10, // Adicionando um pouco de espaçamento
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    height: 30, // Altura fixa para as linhas
  },
  headerRow: {
    backgroundColor: "#EEE",
    fontWeight: "bold",
    borderTopWidth: 1,
  },
  cell: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#000",
  },
  cellL: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderr: "solid",
    borderColor: "#000",
  },
  headerCell: {
    backgroundColor: "#EEE",
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 10,
    textAlign: "center",
  },
  h1: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});

interface IProps {
  data: Machines[];
  name: string;
}

const TableAcid: FC<IProps> = ({ data, name }) => {
  if (!Array.isArray(data)) {
    return <Text>Dados inválidos, esperava-se um array.</Text>;
  }

  return (
    <View style={styles.table}>
      {/* Cabeçalho da tabela */}
      <View style={[styles.row, styles.headerRow]}>
        <View style={styles.cell}>
          <Text style={styles.h1}>Data</Text>
        </View>
        <View style={styles.cellL}>
          <Text style={styles.h1}>Máquina</Text>
        </View>
      </View>
      {/* Linhas de dados */}
      {data.map((item, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.cell}>
            <Text style={styles.text}>{formatDate(new Date(item.date))}</Text>
          </View>
          <View style={styles.cellL}>
            <Text style={styles.text}>{item.machine}</Text>
          </View>
        </View>
      ))}
      <View style={{ flex: 1, flexDirection: "row", gap: 3, marginTop: 5 }}>
        <Text style={{ fontSize: 13 }}>Responsável pela troca:</Text>
        <Text style={{ fontSize: 13 }}>{name}</Text>
      </View>
    </View>
  );
};

export default TableAcid;
