"use client"
import { ApvisaModel } from '@/utils/models/Apvisa';
import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

interface Props {
  reports: ApvisaModel[];
}

const translatedLabels: { [key in keyof ApvisaModel]: string } = {
  date: 'Data',
  name: 'Nome',
  cianoBacteria: 'Cianobactérias',
  escherichaColi: 'Escherichia Coli',
  endotoxin: 'Endotoxina',
  heterotrophic: 'Heterotróficos',
  totalColiforms: 'Coliformes Totais',
  seedingInDepth: 'Semeadura em Profundidade',
  seedingOnSurface: 'Semeadura na Superfície',
  conductivity: 'Condutividade',
  freeChlorine: 'Cloro Livre',
  pH: 'pH',
  potentiometry: 'Potenciometria'
};

const ReportApevisa: React.FC<Props> = ({ reports }) => {
  const [selectedReport, setSelectedReport] = useState<ApvisaModel | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleReportSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const reportName = e.target.value;
    const report = reports.find(report => report.name === reportName);
    setSelectedReport(report || null);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedReport(null); // Reset selected report when date changes
  };

  // Filter reports based on selected date
  const filteredReports = selectedDate ? reports.filter(report => report.date === selectedDate) : [];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
        <h1>Resultado Coleta Apevisa</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: 50, marginBottom: 40 }}>
        <div>
          <h2>Selecione uma data:</h2>
          <Form.Select value={selectedDate} onChange={handleDateChange}>
            <option value="">Selecione uma data</option>
            {Array.from(new Set(reports.map(report => report.date))).map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <h2>Selecione um relatório:</h2>
          <Form.Select value={selectedReport ? selectedReport.name : ""} onChange={handleReportSelection}>
            <option value="">Selecione um relatório</option>
            {filteredReports.map((report, index) => (
              <option key={index} value={report.name}>{report.name}</option>
            ))}
          </Form.Select>
        </div>
      </div>
      {selectedReport && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 30 }}>
            <h3>Detalhes do Relatório: {selectedReport.name}</h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: '50%', textAlign: 'center' }}>Parâmetro</th>
                <th style={{ width: '50%', textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedReport).map(([parameter, status], index) => (
                <tr key={index}>
                  <td style={{ width: '50%', textAlign: 'center' }}>{translatedLabels[parameter as keyof ApvisaModel]}</td>
                  <td style={{ width: '50%', textAlign: 'center' }}>{status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ReportApevisa;


