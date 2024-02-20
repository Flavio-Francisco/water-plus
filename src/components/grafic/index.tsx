"use client"
import React from 'react';

import { Chart } from "react-google-charts";

export interface Props {

    title: string | null;
    data?: object | unknown[] | undefined
}
export interface PropsArry {

    data?: object | unknown[] | undefined
}

const GraficFilter = ({ title, data }: Props) => {



    const options = {

        title: `Grafico de Parametros  \n ${title}`,


    };

    return (
        <div style={{ width: "100%", height: '100%' }}>
            <Chart
                chartType="LineChart"
                data={data}
                width="100%"
                height="300px"
                legendToggle
                options={options}


            />
        </div>
    );
}


export default GraficFilter;