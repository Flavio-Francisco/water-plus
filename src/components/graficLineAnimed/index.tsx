import React, { useEffect, useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Props } from "@/components/grafic";


const { CanvasJSChart } = CanvasJSReact;



const GraficLineAnimed = ({ title, data }:Props) => {
  const startTime = new Date();
  const chartRef = useRef<unknown>(null);

  useEffect(() => {
    const endTime = new Date();
    const timeToRender = endTime.getTime() - startTime.getTime();
    const timeToRenderElement = document.getElementById("timeToRender");
    if (timeToRenderElement) {
      timeToRenderElement.innerHTML = "Time to Render: " + timeToRender + "ms";
    }
  }, []);

  

  const options = {
    zoomEnabled: true,
    animationEnabled: true,
    height:250,
    title: {
      text: ` ${title}`,
      fontFamily:'sans-serif',
      fontSize:14,
      marginBottom:20,
    },
    data: [{
      type: "spline",
    
      dataPoints: data
    }]
  };
 
  
  return (
    <div style={{}} >
      <CanvasJSChart options={options} 
       onRef={(ref: unknown) => chartRef.current = ref}
     
      />
      
    </div>
  );
};

export default GraficLineAnimed;



