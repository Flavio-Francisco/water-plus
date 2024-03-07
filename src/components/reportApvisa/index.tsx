"use client"
import { ApvisaModel } from '@/utils/models/Apvisa';
import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

interface Props {
  reports:  ApvisaModel[];
}

const ReportApevisa: React.FC<Props> = ({ reports }) => {
  const [selectedReport, setSelectedReport] = useState<ApvisaModel | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleReportSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedReport(reports[selectedIndex - 1]); // Adjusting for the "Selecione um relatório" option
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
    setSelectedReport(null); // Reset selected report when date changes
  };

  // Filter reports based on selected date
  const filteredReports = selectedDate ? reports.filter(report => report.date === selectedDate) : reports;

  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30,marginBottom:30}}>
        <h1>Resultado Coleta Apevisa</h1>
      </div>
    <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around', height:50,marginBottom:40}}>
      
      <div>
      <h3>Selecione uma data:</h3>
      <Form.Select value={selectedDate} onChange={handleDateChange}>
        <option value="">Selecione uma data</option>
        {/* Assuming reports contain unique dates */}
        {reports.map((report, index) => (
          <option key={index} value={report.date}>{report.date}</option>
        ))}
      </Form.Select>
      </div>
      <div>
      <h3>Selecione um relatório:</h3>
      <Form.Select value={selectedReport ? selectedReport.name : ""} onChange={handleReportSelection}>
        <option value="">Selecione um relatório</option>
        {filteredReports.map((report, index) => (
          <option key={index} value={report.name}>{report.name}</option>
        ))}
      </Form.Select>
      </div>
      </div>
      {selectedReport && (
        <div >
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50,marginBottom:30}}>
            <h3>Detalhes do Relatório: {selectedReport.name}</h3>
          </div>
          <Table striped bordered hover style={{width:'90%',marginLeft:50}}>
            <thead >
              <tr >
                <th style={{width:'50%',textAlign:'center'}}>Parâmetro</th>
                <th style={{width:'50%',textAlign:'center'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedReport).map(([parameter, status], index) => (
                <tr key={index} >
                  <td style={{width:'50%',textAlign:'center'}}>{parameter}</td>
                  <td style={{width:'50%',textAlign:'center'}}>{status}</td>
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



