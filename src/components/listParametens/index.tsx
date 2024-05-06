import React from "react";
import { Table } from "react-bootstrap";

interface Iprops {
  day?: number[];
  data?: number[];
}

const ListParamets: React.FC<Iprops> = ({ data, day }) => {
  if (!data || !Array.isArray(data)) {
    return <div>Dados não fornecidos</div>;
  }

  return (
    <div className="w-4/5 flex flex-col items-center">
      <h1 className="text-center mt-8 mb-8 text-xl font-bold">
        Dados Diários:
      </h1>
      <Table striped bordered hover className="m-auto w-4/5">
        <thead>
          <tr>
            <th style={{ width: "40%", textAlign: "center" }}>Dia</th>
            <th style={{ width: "40%", textAlign: "center" }}>Parâmetro</th>
          </tr>
        </thead>
        <tbody>
          {day?.map((dayItem, index) => (
            <tr key={index}>
              <td style={{ width: "40%", textAlign: "center" }}>{dayItem}</td>
              <td style={{ width: "40%", textAlign: "center" }}>
                {data[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListParamets;
