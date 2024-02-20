'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';

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
            SaltReservoirLevel: 0
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
        // Lógica de envio do formulário aqui
        console.log(values);
    };

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center mt-3" >
            <h1 className='mb-5'>Paramentros do Tratanento de Água</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={waterTreatmentParametersSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (

                    <Form >

                        <div className="d-flex flex-row gap-5">
                            <Row className="p-2 w-50 justify-content-center align-items-center shadow rounded " >
                                <div className="d-flex align-items-center justify-content-center mt-1">
                                    <h4 className="mb-1">Água de Alimentação</h4>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-centerq gap-3">
                                    <Col className=" col ">
                                        <Field name="WATER_FEED.Color">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="Color">
                                                    <Form.Label className='text-center'>Cor Aparente</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Cor"
                                                        isInvalid={touched.WATER_FEED?.Color && !!errors.WATER_FEED?.Color}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.WATER_FEED?.Color}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="WATER_FEED.Turbidity">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="Turbidity">
                                                    <Form.Label className='text-center'>Turvação</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Turvação"
                                                        isInvalid={touched.WATER_FEED?.Turbidity && !!errors.WATER_FEED?.Turbidity}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.WATER_FEED?.Turbidity}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col className=" col ">
                                        <Field name="WATER_FEED.Taste">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3" controlId="Taste">
                                                    <Form.Label className='text-center '>Sabor</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder=" Sabor"
                                                        isInvalid={touched.WATER_FEED?.Taste && !!errors.WATER_FEED?.Taste}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.WATER_FEED?.Taste}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="WATER_FEED.Odor">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3" controlId="Odor">
                                                    <Form.Label className='text-center '>Odor</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Odor"
                                                        isInvalid={touched.WATER_FEED?.Odor && !!errors.WATER_FEED?.Odor}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.WATER_FEED?.Odor}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col className="col ">
                                        <Field name="WATER_FEED.TotalChlorine">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3" controlId="TotalChlorine">
                                                    <Form.Label className='text-center '>Cloro Total</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Cloro Total"
                                                        isInvalid={touched.WATER_FEED?.TotalChlorine && !!errors.WATER_FEED?.TotalChlorine}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.WATER_FEED?.TotalChlorine}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="WATER_FEED.FreeChlorine">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3" controlId="FreeChlorine">
                                                    <Form.Label className='text-center '>Cloro Livre</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Cloro Livre"
                                                        isInvalid={touched.WATER_FEED?.FreeChlorine && !!errors.WATER_FEED?.FreeChlorine}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.WATER_FEED?.FreeChlorine}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                    </Col>
                                </div>
                                <Col className="w-100 col-6 d-flex justify-content-center align-items-center">
                                    <Field name="WATER_FEED.pH">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mb-3 col-4" controlId="pH">
                                                <Form.Label className='text-center '>PH</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="PH"
                                                    isInvalid={touched.WATER_FEED?.pH && !!errors.WATER_FEED?.pH}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.WATER_FEED?.pH}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                </Col>
                            </Row>
                            <Row className="p-2 w-50 justify-content-center align-items-center shadow rounded  " >
                                <div className="d-flex align-items-center justify-content-center mt-1">
                                    <h4 className="mb-1">Pré-Tratamento</h4>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-centerq gap-3">
                                    <Col className=" col ">
                                        <Field name="PRE_TREATMENT.MultimediaFilterDisplayTime">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="MultimediaFilterDisplayTime">
                                                    <Form.Label style={{ fontSize: 14 }}>Horário do multimeios</Form.Label>
                                                    <Form.Control
                                                        className='text-muted'
                                                        {...field}
                                                        type="time"
                                                        placeholder="multmeios"
                                                        isInvalid={touched.PRE_TREATMENT?.MultimediaFilterDisplayTime && !!errors.PRE_TREATMENT?.MultimediaFilterDisplayTime}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.MultimediaFilterDisplayTime}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="PRE_TREATMENT.MultimediaFilterInputPressure">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="MultimediaFilterInputPressure">
                                                    <Form.Label style={{ fontSize: 14 }}>Pressão do multemeios</Form.Label>
                                                    <Form.Control
                                                        //    style={{ fontSize: 12 }}
                                                        {...field}
                                                        type="text"
                                                        placeholder="Pressão do multemeios"
                                                        isInvalid={touched.PRE_TREATMENT?.MultimediaFilterInputPressure && !!errors.PRE_TREATMENT?.MultimediaFilterInputPressure}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.MultimediaFilterInputPressure}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="PRE_TREATMENT.SaltReservoirLevel">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="SaltReservoirLevel">
                                                    <Form.Label className='text-center'>Nível Sal</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Nível do  Sal"
                                                        isInvalid={touched.PRE_TREATMENT?.SaltReservoirLevel && !!errors.PRE_TREATMENT?.SaltReservoirLevel}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.SaltReservoirLevel}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col className=" col ">
                                        <Field name="PRE_TREATMENT.SoftenerDisplayTime">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="SoftenerDisplayTime">
                                                    <Form.Label style={{ fontSize: 14 }}>Horário do Abrandador</Form.Label>
                                                    <Form.Control
                                                        className='text-muted'
                                                        {...field}
                                                        type="time"
                                                        placeholder="Horário do Abrandador"
                                                        isInvalid={touched.PRE_TREATMENT?.SoftenerDisplayTime && !!errors.PRE_TREATMENT?.SoftenerDisplayTime}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.SoftenerDisplayTime}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="PRE_TREATMENT.SoftenerInputPressure">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="SoftenerInputPressure">
                                                    <Form.Label style={{ fontSize: 14 }}>Pressão do abrandador</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Pressão do abrandador"
                                                        isInvalid={touched.PRE_TREATMENT?.SoftenerInputPressure && !!errors.PRE_TREATMENT?.SoftenerInputPressure}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.SoftenerInputPressure}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="PRE_TREATMENT.SoftenerHardness">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3 " controlId="SoftenerHardness">
                                                    <Form.Label style={{ fontSize: 14 }}>Dureza do Abrandador</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Dureza do Abrandador"
                                                        isInvalid={touched.PRE_TREATMENT?.SoftenerHardness && !!errors.PRE_TREATMENT?.SoftenerHardness}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.SoftenerHardness}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col className="col ">
                                        <Field name="PRE_TREATMENT.CarbonDisplayTime">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3" controlId="CarbonDisplayTime">
                                                    <Form.Label style={{ fontSize: 14 }} className='text-center'>Horário do Carvão</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="time"
                                                        placeholder="Horário do Carvão"
                                                        isInvalid={touched.PRE_TREATMENT?.CarbonDisplayTime && !!errors.PRE_TREATMENT?.CarbonDisplayTime}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.CarbonDisplayTime}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="PRE_TREATMENT.CarbonInputPressure">
                                            {({ field }: FieldProps) => (
                                                <Form.Group className="mt-3" controlId="CarbonInputPressure">
                                                    <Form.Label style={{ fontSize: 14 }} className='text-center '>Entrada do Carvão</Form.Label>
                                                    <Form.Control

                                                        {...field}
                                                        type="text"
                                                        placeholder="Entrada do Carvão"
                                                        isInvalid={touched.PRE_TREATMENT?.CarbonInputPressure && !!errors.PRE_TREATMENT?.CarbonInputPressure}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.CarbonInputPressure}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                        <Field name="PRE_TREATMENT.CarbonOutputPressure">
                                            {({ field }: FieldProps) => (
                                                <Form.Group style={{ fontSize: 14 }} className="mt-3" controlId="CarbonOutputPressure">
                                                    <Form.Label className='text-center '>Saída do Carvão</Form.Label>
                                                    <Form.Control
                                                        {...field}
                                                        type="text"
                                                        placeholder="Saída do Carvão"
                                                        isInvalid={touched.PRE_TREATMENT?.CarbonOutputPressure && !!errors.PRE_TREATMENT?.CarbonOutputPressure}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.PRE_TREATMENT?.CarbonOutputPressure}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            )}
                                        </Field>
                                    </Col>
                                </div>

                            </Row>
                        </div>
                        <div className="d-flex flex-row gap-5 mt-3">
                            <Row className="p-2 w-50 justify-content-center align-items-center shadow rounded " >
                                <div className="d-flex align-items-center justify-content-center mt-1">
                                    <h4 className="mb-1">Osmose 1º Passo</h4>
                                </div>
                                <Col className=" col ">
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.ROInputPressure">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="ROInputPressure">
                                                <Form.Label className='text-center'>Pressão de Entrada da O. R.</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão de Entrada da O. R"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.ROInputPressure && !!errors.REVERSE_OSMOSIS_1ST_STEP?.ROInputPressure}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.ROInputPressure}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.MembraneInputPressure">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="MembraneInputPressure">
                                                <Form.Label className='text-center'>Pressão da Menbrana</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão da Menbrana"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.MembraneInputPressure && !!errors.REVERSE_OSMOSIS_1ST_STEP?.MembraneInputPressure}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.MembraneInputPressure}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.RejectPressure">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="RejectPressure">
                                                <Form.Label className='text-center'>Pressão de Regeito</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão de Regeito"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.RejectPressure && !!errors.REVERSE_OSMOSIS_1ST_STEP?.RejectPressure}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.RejectPressure}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.ROInputConductivity">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="ROInputConductivity">
                                                <Form.Label className='text-center'> Conditividade de Entrada da O.R.</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão da Menbrana"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.ROInputConductivity && !!errors.REVERSE_OSMOSIS_1ST_STEP?.ROInputConductivity}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.ROInputConductivity}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                </Col>
                                <Col className=" col ">
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.ROOutputConductivity">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="ROOutputConductivity">
                                                <Form.Label className='text-center'>Conditividade de Saída da O.R.</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Conditividade de Saída da O.R."
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.ROOutputConductivity && !!errors.REVERSE_OSMOSIS_1ST_STEP?.ROOutputConductivity}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.ROOutputConductivity}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.SalinityRejectionRate">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="SalinityRejectionRate">
                                                <Form.Label className='text-center'>Taxa de Regeição Salina</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Taxa de Regeição Salina"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.SalinityRejectionRate && !!errors.REVERSE_OSMOSIS_1ST_STEP?.SalinityRejectionRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.SalinityRejectionRate}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.PermeateFlowRate">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="PermeateFlowRate">
                                                <Form.Label className='text-center'>Vasão do Permeado (litros/min)</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Vasão do Permeado (litros/min)"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.PermeateFlowRate && !!errors.REVERSE_OSMOSIS_1ST_STEP?.PermeateFlowRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.PermeateFlowRate}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_1ST_STEP.RejectFlowRate">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="RejectFlowRate">
                                                <Form.Label className='text-center'> Vasão do regeito (litros/min)</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão da Menbrana (litros/min)"
                                                    isInvalid={touched.REVERSE_OSMOSIS_1ST_STEP?.RejectFlowRate && !!errors.REVERSE_OSMOSIS_1ST_STEP?.RejectFlowRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_1ST_STEP?.RejectFlowRate}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                </Col>
                            </Row>
                            <Row className="p-2 w-50 justify-content-center align-items-center shadow rounded " >
                                <div className="d-flex align-items-center justify-content-center mt-1">
                                    <h4 className="mb-1">Osmose 2º Passo</h4>
                                </div>
                                <Col className=" col ">
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.ROInputPressure">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="ROInputPressure">
                                                <Form.Label className='text-center'>Pressão de Entrada da O. R.</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão de Entrada da O. R"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.ROInputPressure && !!errors.REVERSE_OSMOSIS_2ND_STEP?.ROInputPressure}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.ROInputPressure}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.MembraneInputPressure">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="MembraneInputPressure">
                                                <Form.Label className='text-center'>Pressão da Menbrana</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão da Menbrana"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.MembraneInputPressure && !!errors.REVERSE_OSMOSIS_2ND_STEP?.MembraneInputPressure}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.MembraneInputPressure}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.RejectPressure">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="RejectPressure">
                                                <Form.Label className='text-center'>Pressão de Regeito</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão de Regeito"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.RejectPressure && !!errors.REVERSE_OSMOSIS_2ND_STEP?.RejectPressure}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.RejectPressure}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.ROInputConductivity">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="ROInputConductivity">
                                                <Form.Label className='text-center'> Conditividade de Entrada da O.R.</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão da Menbrana"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.ROInputConductivity && !!errors.REVERSE_OSMOSIS_2ND_STEP?.ROInputConductivity}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.ROInputConductivity}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                </Col>
                                <Col className=" col ">
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.ROOutputConductivity">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="ROOutputConductivity">
                                                <Form.Label className='text-center'>Conditividade de Saída da O.R.</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Conditividade de Saída da O.R."
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.ROOutputConductivity && !!errors.REVERSE_OSMOSIS_2ND_STEP?.ROOutputConductivity}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.ROOutputConductivity}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.SalinityRejectionRate">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="SalinityRejectionRate">
                                                <Form.Label className='text-center'>Taxa de Regeição Salina</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Taxa de Regeição Salina"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.SalinityRejectionRate && !!errors.REVERSE_OSMOSIS_2ND_STEP?.SalinityRejectionRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.SalinityRejectionRate}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.PermeateFlowRate">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="PermeateFlowRate">
                                                <Form.Label className='text-center'>Vasão do Permeado (litros/min)</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Vasão do Permeado (litros/min)"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.PermeateFlowRate && !!errors.REVERSE_OSMOSIS_2ND_STEP?.PermeateFlowRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.PermeateFlowRate}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                    <Field name="REVERSE_OSMOSIS_2ND_STEP.RejectFlowRate">
                                        {({ field }: FieldProps) => (
                                            <Form.Group className="mt-3 " controlId="RejectFlowRate">
                                                <Form.Label className='text-center'> Vasão do regeito (litros/min)</Form.Label>
                                                <Form.Control
                                                    {...field}
                                                    type="text"
                                                    placeholder="Pressão da Menbrana (litros/min)"
                                                    isInvalid={touched.REVERSE_OSMOSIS_2ND_STEP?.RejectFlowRate && !!errors.REVERSE_OSMOSIS_2ND_STEP?.RejectFlowRate}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.REVERSE_OSMOSIS_2ND_STEP?.RejectFlowRate}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        )}
                                    </Field>
                                </Col>
                            </Row>
                        </div>
                        <Row className=" mt-3 m-auto p-2 w-50 justify-content-center align-items-center shadow rounded " >
                            <div className="d-flex align-items-center justify-content-center mt-1">
                                <h4 className="mb-1">Loop</h4>
                            </div>
                            <Col className=" col ">
                                <Field name="LOOP.OutputPressure">
                                    {({ field }: FieldProps) => (
                                        <Form.Group className="mt-3 " controlId="OutputPressure ">
                                            <Form.Label className='text-center'>Pressão de Saída</Form.Label>
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Pressão de Saída"
                                                isInvalid={touched.LOOP?.OutputPressure && !!errors.LOOP?.OutputPressure}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.LOOP?.OutputPressure}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    )}
                                </Field>
                                <Field name="LOOP.ReturnPressure">
                                    {({ field }: FieldProps) => (
                                        <Form.Group className="mt-3 " controlId="ReturnPressure">
                                            <Form.Label className='text-center'>Pressão de Retorno</Form.Label>
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Pressão de Retorno"
                                                isInvalid={touched.LOOP?.ReturnPressure && !!errors.LOOP?.ReturnPressure}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.LOOP?.ReturnPressure}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    )}
                                </Field>
                                <Field name="LOOP.OzoneTestBefore1stShift">
                                    {({ field }: FieldProps) => (
                                        <Form.Group className="mt-3 " controlId="OzoneTestBefore1stShift">
                                            <Form.Label className='text-center'>Ozônio</Form.Label>
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Ozônio"
                                                isInvalid={touched.LOOP?.OzoneTestBefore1stShift && !!errors.LOOP?.OzoneTestBefore1stShift}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.LOOP?.OzoneTestBefore1stShift}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    )}
                                </Field>
                                <Field name="LOOP.Conductivity">
                                    {({ field }: FieldProps) => (
                                        <Form.Group className="mt-3 " controlId="Conductivity">
                                            <Form.Label className='text-center'>Condutividade</Form.Label>
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Condutividade"
                                                isInvalid={touched.LOOP?.Conductivity && !!errors.LOOP?.Conductivity}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.LOOP?.Conductivity}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                        <div className="m-auto  d-flex align-items-center justify-content-center mt-5 mb-5">
                            <Button className="btn btn-primary btn-lg m-auto " type="submit" variant="contained">
                                Salvar
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </Container>
    );
};

export default WaterParametersForm;


