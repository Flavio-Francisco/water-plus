import ReportApevisa from "@/components/reportApvisa"
import { ArrayApavise } from "@/utils/models/Data"
import React from "react"


export default function ReportApevisaPage  (){
return(
    <div>
        <ReportApevisa reports={ArrayApavise}/>
    </div>
)
}