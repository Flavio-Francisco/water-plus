import React  from "react";
import LabTabs from "../../modalUI";
import ChemistFormNew from "../newForm";
import ChemistFormEdit from "../editForm";



export default function ModalLabChemist(){
    return(
        <div>
        <LabTabs ComponetNew={
         <div>
       < ChemistFormEdit/>   
         </div>
       
        } ComponetEdit={
          <div>
       < ChemistFormNew/>
          </div>

        }/>
      </div>
    )
}