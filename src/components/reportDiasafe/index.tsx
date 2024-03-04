"use client";
import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { fakeDiasafe } from "@/utils/models/Data";
import { Table } from 'react-bootstrap';
import { styles } from "./styles";

const ReportDiasafe = () => {
  const date = new Date();

 
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.date}> Caruaru, {date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.h1}>
          <Text style={styles.title}>
            Relatorio de Troca de Diasafe
          </Text>
          <View style={styles.line} />
        </View>
        <div>
        <Table striped bordered hover style={{width:'60%',height:'30%'}}>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Máquina</th>
                </tr>
            </thead>
            <tbody>
                {fakeDiasafe.map((dados, index) => (
                    <tr key={index}>
                        <td>{dados.data}</td>
                        <td>{dados.maquina}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
      </Page>
    </Document>
  );
};

export default ReportDiasafe;
