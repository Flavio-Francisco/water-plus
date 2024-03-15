'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Formik, Field, Form, } from 'formik';

import waterTreatmentParametersSchema from '../../utils/validation/WaterParamentersValidation'; // Importa o esquema de validação
import { WaterTreatmentParameters } from '@/utils/models/WaterParametersModel';

const WaterParametersForm = () => {
    const initialValues: WaterTreatmentParameters = {
        WATER_FEED: {
            Color: '',
            Turbidity: '',
            Taste: '',
            Odor: '',
            TotalChlorine: 0,
            FreeChlorine: 0,
            pH: 0,
        },
        PRE_TREATMENT: {
            SoftenerHardness: 0,
            MultimediaFilterInputPressure: 0,
            SoftenerInputPressure: 0,
            CarbonInputPressure: 0,
            CarbonOutputPressure: 0,
            MultimediaFilterDisplayTime: '',
            SoftenerDisplayTime: '',
            CarbonDisplayTime: '',
            SaltReservoirLevel: ''
        },
        REVERSE_OSMOSIS_1ST_STEP: {
            ROInputPressure: 0,
            MembraneInputPressure: 0,
            RejectPressure: 0,
            ROInputConductivity: 0,
            ROOutputConductivity: 0,
            SalinityRejectionRate: 0,
            PermeateFlowRate: 0,
            RejectFlowRate: 0
        },
        REVERSE_OSMOSIS_2ND_STEP: {
            ROInputPressure: 0,
            MembraneInputPressure: 0,
            RejectPressure: 0,
            ROInputConductivity: 0,
            ROOutputConductivity: 0,
            SalinityRejectionRate: 0,
            PermeateFlowRate: 0,
            RejectFlowRate: 0
        },
        LOOP: {
            OutputPressure: 0,
            ReturnPressure: 0,
            OzoneTestBefore1stShift: false,
            Conductivity: 0
        }
    };

    const handleSubmit = (values: WaterTreatmentParameters) => {
        console.log(values);
      };
    
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={waterTreatmentParametersSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
        <Form className="max-w-lg mx-auto">
          {/* WATER_FEED */}
          <div className="col-span-1 sm:col-span-1">
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-lg font-medium mb-2">Alimentação de Água</h3>
              <div className="grid grid-cols-2 gap-4">
              <div>
        <label htmlFor="WATER_FEED.Color" className="block text-sm font-medium text-gray-700">
          Cor
        </label>
        <Field name="WATER_FEED.Color" as="select" className="mt-1 p-2 border rounded-md w-full">
          <option value="">Selecione</option>
          <option value="Incolor">Incolor</option>
          <option value="Turvar">Turvar</option>
          <option value="Com Residuos">Com Residuos</option>
        </Field>
        {errors.WATER_FEED && errors.WATER_FEED.Color && touched.WATER_FEED && touched.WATER_FEED.Color && (
          <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.Color}</div>
        )}
      </div>
      {/* Turbidez */}
      <div>
        <label htmlFor="WATER_FEED.Turbidity" className="block text-sm font-medium text-gray-700">
          Turbidez
        </label>
        <Field name="WATER_FEED.Turbidity" as="select" className="mt-1 p-2 border rounded-md w-full">
          <option value="">Selecione</option>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </Field>
        {errors.WATER_FEED && errors.WATER_FEED.Turbidity && touched.WATER_FEED && touched.WATER_FEED.Turbidity && (
          <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.Turbidity}</div>
        )}
      </div>
      {/* Sabor */}
      <div>
        <label htmlFor="WATER_FEED.Taste" className="block text-sm font-medium text-gray-700">
          Sabor
        </label>
        <Field name="WATER_FEED.Taste" as="select" className="mt-1 p-2 border rounded-md w-full">
          <option value="">Selecione</option>
          <option value="Insípida">Insípida</option>
          <option value="Salga">Salga</option>
        </Field>
        {errors.WATER_FEED && errors.WATER_FEED.Taste && touched.WATER_FEED && touched.WATER_FEED.Taste && (
          <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.Taste}</div>
        )}
      </div>
      {/* Odor */}
      <div>
        <label htmlFor="WATER_FEED.Odor" className="block text-sm font-medium text-gray-700">
          Odor
        </label>
        <Field name="WATER_FEED.Odor" as="select" className="mt-1 p-2 border rounded-md w-full">
          <option value="">Selecione</option>
          <option value="Inodora">Inodora</option>
          <option value="Odorífero">Odorífero</option>
        </Field>
        {errors.WATER_FEED && errors.WATER_FEED.Odor && touched.WATER_FEED && touched.WATER_FEED.Odor && (
          <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.Odor}</div>
        )}
      </div>
      {/* cloro total */}
      <div>
  <label htmlFor="WATER_FEED.TotalChlorine" className="block text-sm font-medium text-gray-700">
    Cloro Total
  </label>
  <Field name="WATER_FEED.TotalChlorine" as="select" className="mt-1 p-2 border rounded-md w-full">
    <option value="">Selecione</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
 
  </Field>
  {errors.WATER_FEED && errors.WATER_FEED.TotalChlorine && touched.WATER_FEED && touched.WATER_FEED.TotalChlorine && (
    <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.TotalChlorine}</div>
  )}
</div>
      {/* cloro livre */}
      <div>
  <label htmlFor="WATER_FEED.FreeChlorine" className="block text-sm font-medium text-gray-700">
    Cloro Livre
  </label>
  <Field name="WATER_FEED.FreeChlorine" as="select" className="mt-1 p-2 border rounded-md w-full">
    <option value="">Selecione</option>
    <option value="0.5">0.5</option>
    <option value="1">1</option>
    <option value="1.5">1.5</option>
    <option value="2">2</option>
    
  </Field>
  {errors.WATER_FEED && errors.WATER_FEED.FreeChlorine && touched.WATER_FEED && touched.WATER_FEED.FreeChlorine && (
    <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.FreeChlorine}</div>
  )}
</div>

      {/* pH */}
      <div>
  <label htmlFor="WATER_FEED.pH" className="block text-sm font-medium text-gray-700">
    pH
  </label>
  <Field name="WATER_FEED.pH" as="select" className="mt-1 p-2 border rounded-md w-full">
    <option value="">Selecione</option>
    <option value="5">5</option>
    <option value="5.5">5.5</option>
    <option value="6.5">6.5</option>
    <option value="7">7</option>
    <option value="7.5">7.5</option>
    <option value="8">8</option>
    <option value="8.5">8.5</option>
    <option value="9">9</option>
    <option value="10">10</option>
  
  </Field>
  {errors.WATER_FEED && errors.WATER_FEED.pH && touched.WATER_FEED && touched.WATER_FEED.pH && (
    <div className="text-red-600 text-sm mt-1">{errors.WATER_FEED.pH}</div>
  )}
 
</div>

              </div>
            </div>
          </div>
        

          <div className="col-span-1 sm:col-span-1 " >
  <div className="bg-white shadow-md rounded-md p-4">
    <h3 className="text-lg font-medium mb-2">Pré-Tratamento</h3>
    <div className="grid grid-cols-2 gap-4">
      {/* SoftenerInputPressure */}
      <div>
        <label htmlFor="PRE_TREATMENT.SoftenerInputPressure" className="block text-sm font-medium text-gray-700">
          Pressão de Entrada do Amaciador
        </label>
        <Field name="PRE_TREATMENT.SoftenerInputPressure" type="number" className="mt-1 p-2 border rounded-md w-full" />
        {errors.PRE_TREATMENT && errors.PRE_TREATMENT.SoftenerInputPressure && touched.PRE_TREATMENT && touched.PRE_TREATMENT.SoftenerInputPressure && (
          <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.SoftenerInputPressure}</div>
        )}
      </div>
      {/* CarbonInputPressure */}
      <div>
        <label htmlFor="PRE_TREATMENT.CarbonInputPressure" className="block text-sm font-medium text-gray-700">
          Pressão de Entrada de Carvão
        </label>
        <Field name="PRE_TREATMENT.CarbonInputPressure" type="number" className="mt-1 p-2 border rounded-md w-full" />
        {errors.PRE_TREATMENT && errors.PRE_TREATMENT.CarbonInputPressure && touched.PRE_TREATMENT && touched.PRE_TREATMENT.CarbonInputPressure && (
          <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.CarbonInputPressure}</div>
        )}
      </div>
      {/* CarbonOutputPressure */}
      <div>
        <label htmlFor="PRE_TREATMENT.CarbonOutputPressure" className="block text-sm font-medium text-gray-700">
          Pressão de Saída de Carvão
        </label>
        <Field name="PRE_TREATMENT.CarbonOutputPressure" type="number" className="mt-1 p-2 border rounded-md w-full" />
        {errors.PRE_TREATMENT && errors.PRE_TREATMENT.CarbonOutputPressure && touched.PRE_TREATMENT && touched.PRE_TREATMENT.CarbonOutputPressure && (
          <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.CarbonOutputPressure}</div>
        )}
      </div>
      {/* MultimediaFilterDisplayTime */}
      <div>
        <label htmlFor="PRE_TREATMENT.MultimediaFilterDisplayTime" className="block text-sm font-medium text-gray-700">
         Horário do Filtro Multimídia
        </label>
        <Field name="PRE_TREATMENT.MultimediaFilterDisplayTime" type="time" className="mt-1 p-2 border rounded-md w-full" />
        {errors.PRE_TREATMENT && errors.PRE_TREATMENT.MultimediaFilterDisplayTime && touched.PRE_TREATMENT && touched.PRE_TREATMENT.MultimediaFilterDisplayTime && (
          <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.MultimediaFilterDisplayTime}</div>
        )}
      </div>
  {/* SoftenerDisplayTime */}
<div>
  <label htmlFor="PRE_TREATMENT.SoftenerDisplayTime" className="block text-sm font-medium text-gray-700">
  Horário do  Exibição do Amaciador
  </label>
  <Field name="PRE_TREATMENT.SoftenerDisplayTime" type="time" className="mt-1 p-2 border rounded-md w-full" />
  {errors.PRE_TREATMENT && errors.PRE_TREATMENT.SoftenerDisplayTime && touched.PRE_TREATMENT && touched.PRE_TREATMENT.SoftenerDisplayTime && (
    <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.SoftenerDisplayTime}</div>
  )}
</div>

{/* CarbonDisplayTime */}
<div>
  <label htmlFor="PRE_TREATMENT.CarbonDisplayTime" className="block text-sm font-medium text-gray-700">
  Horário do Exibição do Carvão
  </label>
  <Field name="PRE_TREATMENT.CarbonDisplayTime" type="time" className="mt-1 p-2 border rounded-md w-full" />
  {errors.PRE_TREATMENT && errors.PRE_TREATMENT.CarbonDisplayTime && touched.PRE_TREATMENT && touched.PRE_TREATMENT.CarbonDisplayTime && (
    <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.CarbonDisplayTime}</div>
  )}
</div>

{/* SaltReservoirLevel */}
<div>
  <label htmlFor="PRE_TREATMENT.SaltReservoirLevel" className="block text-sm font-medium text-gray-700">
    Nível do Reservatório de Sal
  </label>
  <Field name="PRE_TREATMENT.SaltReservoirLevel" as="select" className="mt-1 p-2 border rounded-md w-full">
    <option value="">Selecione</option>
    <option value="Baixo">Baixo</option>
    <option value="Médio">Médio</option>
    <option value="Alto">Alto</option>
    {/* Adicione outras opções conforme necessário */}
  </Field>
  {errors.PRE_TREATMENT && errors.PRE_TREATMENT.SaltReservoirLevel && touched.PRE_TREATMENT && touched.PRE_TREATMENT.SaltReservoirLevel && (
    <div className="text-red-600 text-sm mt-1">{errors.PRE_TREATMENT.SaltReservoirLevel}</div>
  )}
</div>

</div>
    </div>
  </div>
{/*proximo card*/}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </Form>
      )}
    </Formik>
      );
};

export default WaterParametersForm;


