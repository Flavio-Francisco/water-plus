"use client";
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
    <div className="w-full flex flex-col items-center">
      <h1 className="text-center mt-8 mb-8 text-sm font-bold max-sm:ml-24">
        Dados Diários:
      </h1>
      <div className="w-full max-w-2xl max-h-96 max-sm:max-w-90 overflow-y-auto max-sm:ml-20">
        <Table striped bordered hover className="w-full ">
          <thead>
            <tr>
              <th className="w-2/5 max-sm:w-1/6 text-center">Dia</th>
              <th className="w-2/5 max-sm:w-1/6 text-center">Parâmetro</th>
            </tr>
          </thead>
          <tbody>
            {day?.map((dayItem, index) => (
              <tr key={index}>
                <td className="w-2/5 max-sm:w-1/6 text-center">{dayItem}</td>
                <td className="w-2/5 max-sm:w-1/6 text-center">
                  {data[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListParamets;
