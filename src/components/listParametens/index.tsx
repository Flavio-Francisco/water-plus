import React from "react";
import { Table } from "react-bootstrap";


interface Props {
  data?: object | unknown[] | undefined;
}

const ListParamets: React.FC<Props> = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>Dados não fornecidos</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
        Dados Diários:
      </h1>
      <Table striped bordered hover style={{width:'90%'}}>
      <thead>
        <tr>
          <th style={{width:'40%' ,textAlign:'center'}}>Dia</th>
          <th style={{width:'40%' ,textAlign:'center'}}>Parâmetro</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} >
            <td style={{width:'40%' ,textAlign:'center'}}>{item.x}</td>
            <td style={{width:'40%',textAlign:'center'}}>{item.y}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default ListParamets;
