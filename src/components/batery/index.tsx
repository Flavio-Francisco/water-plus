import React from 'react';
import"./styles.css"

interface BatteryLoadingProps {
    chargeLevel: number; // Nível de carga da bateria (0 a 100)
  }

export default function Batery({chargeLevel}:BatteryLoadingProps){
console.log("cavão", chargeLevel);

return (
  <div className="flex justify-center items-center  max-sm:w-[65px] ">
    <div className="battery-loading">
      <div
        className="battery-indicator"
        style={{ height: `${chargeLevel > 100 ? 100 : chargeLevel}%` }}
      ></div>
    </div>
  </div>
);
   
}