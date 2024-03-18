'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import AddchartIcon from "@mui/icons-material/Addchart";
import waterTreatmentParametersSchema from '../../utils/validation/WaterParamentersValidation'; // Importa o esquema de validação
import { WaterTreatmentParameters } from '@/utils/models/WaterParametersModel';



const WaterParametersForm = () => {


  const [showModalParm, setShowModalParm] = useState(false);

  const handleCloseModalParm = () => setShowModalParm(false);
  const handleShowModalParm = () => setShowModalParm(true);
  const [isActive, setActive] = useState(false);
  const active = () => setActive(!isActive);



  const initialValues: WaterTreatmentParameters = {
    WATER_FEED: {
      Color:undefined,
      FreeChlorine:undefined,
      Odor:undefined,
      pH:undefined,
      Taste:undefined,
      TotalChlorine:undefined,
      Turbidity:undefined,

    },
    PRE_TREATMENT: {
      CarbonDisplayTime:undefined,
      CarbonInputPressure:undefined,
      CarbonOutputPressure:undefined,
      MultimediaFilterDisplayTime:undefined,
      MultimediaFilterInputPressure:undefined,
      SaltReservoirLevel:undefined,
      SoftenerDisplayTime:undefined,
      SoftenerHardness:undefined,
      SoftenerInputPressure:undefined,
    },
    REVERSE_OSMOSIS_1ST_STEP: {
      MembraneInputPressure:undefined,
      PermeateFlowRate:undefined,
      RejectFlowRate:undefined,
      RejectPressure:undefined,
      ROInputConductivity:undefined,
      ROInputPressure:undefined,
      ROOutputConductivity:undefined,
      SalinityRejectionRate:undefined,


    },
    REVERSE_OSMOSIS_2ND_STEP: {
      MembraneInputPressure:undefined,
      PermeateFlowRate:undefined,
      RejectFlowRate:undefined,
      RejectPressure:undefined,
      ROInputConductivity:undefined,
      ROInputPressure:undefined,
      ROOutputConductivity:undefined,
      SalinityRejectionRate:undefined,
    },
    LOOP: {
      Conductivity:undefined,
      OutputPressure:undefined,
      OzoneTestBefore1stShift:undefined,
      ReturnPressure:undefined,
    }
};


  const handleSubmit = (values: WaterTreatmentParameters) => {
    console.log(values);
  };

  return (
    <>
    <button
    className={isActive ? "active" : "sidebar-nav"}
     onClick={() => {
      handleShowModalParm();
      active();
    }}
  ><AddchartIcon/>Parametros </button>
    
    <Modal show={showModalParm} onHide={handleCloseModalParm} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>Parametros da ETE</Modal.Title>
      </Modal.Header>
      
    <Formik
      initialValues={initialValues}
      validationSchema={waterTreatmentParametersSchema}
      onSubmit={handleSubmit}
    >
      {({  isSubmitting}) => (
        <>
      <Modal.Body>
       
      <Form className="md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* WATER_FEED */}
                  <div className="mb-2">
                    <p className="block text-sm font-medium text-gray-700">Cor Aparente</p>
                    <Field as="select" name="WATER_FEED.Color" className="form-control mb-2">
                      <option value="">Selecioner</option>
                      <option value="Incolor">Incolor</option>
                      <option value="Turva">Tuvar</option>
                    </Field>
                    <ErrorMessage name="WATER_FEED.Color" component="div" className="text-red-500" />
                  </div>
                  <div className="mb-2">
                    <p className="block text-sm font-medium text-gray-700">Turvação</p>
                    <Field as="select" name="WATER_FEED.Turbidity" className="form-control mb-2">
                      <option value="">Selecioner</option>
                      <option value="Transparente">Transparente</option>
                      <option value="Turva">Tuvar</option>
                    </Field>
                    <ErrorMessage name="WATER_FEED.Turbidity" component="div" className="text-red-500" />
                  </div>
                  {/* Add other fields here */}
                </Form>
      </Modal.Body> 
       <Modal.Footer>
       <Button variant="secondary" onClick={handleCloseModalParm}  disabled={isSubmitting}>
        Fechar
       </Button>
       <Button variant="primary" onClick={handleCloseModalParm}  disabled={isSubmitting}>
       {isSubmitting ? ' Salvando...' : ' Salvar'}   
       </Button>
     </Modal.Footer>
     </>
      )}
      
    </Formik>
   
    </Modal>
    </>
  );
};

export default WaterParametersForm;


