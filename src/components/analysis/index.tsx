"use client";

import { createReservoirAnalisys } from "@/app/fecth/resevatorir";
import { useUserContext } from "@/context/userContext";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useFormik } from "formik";
import validationSchema, { ReservoirAnalysisInitialValues } from "./validation";

interface Iprops {
  onSucess: (success: boolean) => void;
}

const ReservoirAnalysisForm: React.FC<Iprops> = ({ onSucess }) => {
  const { user } = useUserContext();

  const { mutate } = useMutation({
    mutationKey: ["AnalyseForm"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (values: ReservoirAnalysisInitialValues) =>
      createReservoirAnalisys(user?.system_id || 0, {
        date: values.date,
        sampleName: values.sampleName,
        bicarbonateAlkalinity: String(values.bicarbonateAlkalinity),
        carbonateAlkalinity: String(values.carbonateAlkalinity),
        hydroxideAlkalinity: String(values.hydroxideAlkalinity),
        totalAlkalinity: String(values.totalAlkalinity),
        aluminum: String(values.aluminum),
        ammonia: String(values.ammonia),
        calcium: String(values.calcium),
        chlorides: String(values.chlorides),
        freeResidualChlorine: String(values.freeResidualChlorine),
        apparentColor: String(values.apparentColor),
        carbonateHardness: String(values.carbonateHardness),
        nonCarbonateHardness: String(values.nonCarbonateHardness),
        totalHardness: String(values.totalHardness),
        totalIron: String(values.totalIron),
        magnesium: String(values.magnesium),
        dissolvedOxygen: String(values.dissolvedOxygen),
        electricalConductivity: String(values.electricalConductivity),
        endotoxins: String(values.endotoxins),
        hydrogenSulfide: String(values.hydrogenSulfide),
        manganese: String(values.manganese),
        nitrate: String(values.nitrate),
        nitrite: String(values.nitrite),
        heterotrophicBacteriaCount: String(values.heterotrophicBacteriaCount),
        potassium: String(values.potassium),
        sodium: String(values.sodium),
        sulfate: String(values.sulfate),
        surfactants: String(values.surfactants),
        totalColiforms: String(values.totalColiforms),
        pH: String(values.pH),
        totalDissolvedSolids: String(values.totalDissolvedSolids),
      }),
    onSuccess: (data) => {
      console.log(data);

      onSucess(true);
      alert("Dados Salvos com Sucesso!!!");
    },
    onError: (data) => {
      console.log(data);
      onSucess(false);
      alert("Erro ao Salvar Dados!!!");
    },
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      sampleName: "",
      bicarbonateAlkalinity: 0,
      carbonateAlkalinity: 0,
      hydroxideAlkalinity: 0,
      totalAlkalinity: 0,
      aluminum: 0,
      ammonia: 0,
      calcium: 0,
      chlorides: 0,
      freeResidualChlorine: 0,
      electricalConductivity: 0,
      apparentColor: 0,
      carbonateHardness: 0,
      nonCarbonateHardness: 0,
      totalHardness: 0,
      totalIron: 0,
      magnesium: 0,
      manganese: 0,
      nitrate: 0,
      nitrite: 0,
      dissolvedOxygen: 0,
      pH: 0,
      potassium: 0,
      sodium: 0,
      totalDissolvedSolids: 0,
      sulfate: 0,
      hydrogenSulfide: 0,
      surfactants: 0,
      totalColiforms: 0,
      heterotrophicBacteriaCount: 0,
      endotoxins: 0,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      mutate(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full mx-auto mt-8 ">
      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Data da Coleta:</label>
          <input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.date && formik.errors.date && (
            <span className="text-red-500 text-sm">{formik.errors.date}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nome da Amostra:</label>
          <input
            type="text"
            name="sampleName"
            value={formik.values.sampleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.sampleName && formik.errors.sampleName && (
            <span className="text-red-500 text-sm">
              {formik.errors.sampleName}
            </span>
          )}
        </div>
      </div>

      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">A. de Hidróxido:</label>
          <input
            type="number"
            name="hydroxideAlkalinity"
            value={formik.values.hydroxideAlkalinity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.hydroxideAlkalinity &&
            formik.errors.hydroxideAlkalinity && (
              <span className="text-red-500 text-sm">
                {formik.errors.hydroxideAlkalinity}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Alcalinidade Total:</label>
          <input
            type="number"
            name="totalAlkalinity"
            value={formik.values.totalAlkalinity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.totalAlkalinity && formik.errors.totalAlkalinity && (
            <span className="text-red-500 text-sm">
              {formik.errors.totalAlkalinity}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Alumínio:</label>
          <input
            type="number"
            name="aluminum"
            value={formik.values.aluminum}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.aluminum && formik.errors.aluminum && (
            <span className="text-red-500 text-sm">
              {formik.errors.aluminum}
            </span>
          )}
        </div>
      </div>

      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Amônia:</label>
          <input
            type="number"
            name="ammonia"
            value={formik.values.ammonia}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.ammonia && formik.errors.ammonia && (
            <span className="text-red-500 text-sm">
              {formik.errors.ammonia}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cálcio:</label>
          <input
            type="number"
            name="calcium"
            value={formik.values.calcium}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.calcium && formik.errors.calcium && (
            <span className="text-red-500 text-sm">
              {formik.errors.calcium}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cloretos:</label>
          <input
            type="number"
            name="chlorides"
            value={formik.values.chlorides}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.chlorides && formik.errors.chlorides && (
            <span className="text-red-500 text-sm">
              {formik.errors.chlorides}
            </span>
          )}
        </div>
      </div>
      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Cloro Residual Livre:</label>
          <input
            type="number"
            name="freeResidualChlorine"
            value={formik.values.freeResidualChlorine}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.freeResidualChlorine &&
            formik.errors.freeResidualChlorine && (
              <span className="text-red-500 text-sm">
                {formik.errors.freeResidualChlorine}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Condutividade Elétrica:</label>
          <input
            type="number"
            name="electricalConductivity"
            value={formik.values.electricalConductivity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.electricalConductivity &&
            formik.errors.electricalConductivity && (
              <span className="text-red-500 text-sm">
                {formik.errors.electricalConductivity}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cor Aparente:</label>
          <input
            type="number"
            name="apparentColor"
            value={formik.values.apparentColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.apparentColor && formik.errors.apparentColor && (
            <span className="text-red-500 text-sm">
              {formik.errors.apparentColor}
            </span>
          )}
        </div>
      </div>

      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Dureza do Carbonato:</label>
          <input
            type="number"
            name="carbonateHardness"
            value={formik.values.carbonateHardness}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.carbonateHardness &&
            formik.errors.carbonateHardness && (
              <span className="text-red-500 text-sm">
                {formik.errors.carbonateHardness}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">D. Não-Carbonato:</label>
          <input
            type="number"
            name="nonCarbonateHardness"
            value={formik.values.nonCarbonateHardness}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.nonCarbonateHardness &&
            formik.errors.nonCarbonateHardness && (
              <span className="text-red-500 text-sm">
                {formik.errors.nonCarbonateHardness}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dureza Total:</label>
          <input
            type="number"
            name="totalHardness"
            value={formik.values.totalHardness}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.totalHardness && formik.errors.totalHardness && (
            <span className="text-red-500 text-sm">
              {formik.errors.totalHardness}
            </span>
          )}
        </div>
      </div>
      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Ferro Total:</label>
          <input
            type="number"
            name="totalIron"
            value={formik.values.totalIron}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.totalIron && formik.errors.totalIron && (
            <span className="text-red-500 text-sm">
              {formik.errors.totalIron}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Magnésio:</label>
          <input
            type="number"
            name="magnesium"
            value={formik.values.magnesium}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.magnesium && formik.errors.magnesium && (
            <span className="text-red-500 text-sm">
              {formik.errors.magnesium}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Manganês:</label>
          <input
            type="number"
            name="manganese"
            value={formik.values.manganese}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.manganese && formik.errors.manganese && (
            <span className="text-red-500 text-sm">
              {formik.errors.manganese}
            </span>
          )}
        </div>
      </div>
      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Nitrato:</label>
          <input
            type="number"
            name="nitrate"
            value={formik.values.nitrate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.nitrate && formik.errors.nitrate && (
            <span className="text-red-500 text-sm">
              {formik.errors.nitrate}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nitrito:</label>
          <input
            type="number"
            name="nitrite"
            value={formik.values.nitrite}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.nitrite && formik.errors.nitrite && (
            <span className="text-red-500 text-sm">
              {formik.errors.nitrite}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Oxigênio Dissolvido:</label>
          <input
            type="number"
            name="dissolvedOxygen"
            value={formik.values.dissolvedOxygen}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.dissolvedOxygen && formik.errors.dissolvedOxygen && (
            <span className="text-red-500 text-sm">
              {formik.errors.dissolvedOxygen}
            </span>
          )}
        </div>
      </div>

      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">pH:</label>
          <input
            type="number"
            name="pH"
            value={formik.values.pH}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.pH && formik.errors.pH && (
            <span className="text-red-500 text-sm">{formik.errors.pH}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Potássio:</label>
          <input
            type="number"
            name="potassium"
            value={formik.values.potassium}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.potassium && formik.errors.potassium && (
            <span className="text-red-500 text-sm">
              {formik.errors.potassium}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sódio:</label>
          <input
            type="number"
            name="sodium"
            value={formik.values.sodium}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.sodium && formik.errors.sodium && (
            <span className="text-red-500 text-sm">{formik.errors.sodium}</span>
          )}
        </div>
      </div>

      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">S. Dissolvidos Totais:</label>
          <input
            type="number"
            name="totalDissolvedSolids"
            value={formik.values.totalDissolvedSolids}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.totalDissolvedSolids &&
            formik.errors.totalDissolvedSolids && (
              <span className="text-red-500 text-sm">
                {formik.errors.totalDissolvedSolids}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sulfato:</label>
          <input
            type="number"
            name="sulfate"
            value={formik.values.sulfate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.sulfate && formik.errors.sulfate && (
            <span className="text-red-500 text-sm">
              {formik.errors.sulfate}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sulfeto de Hidrogênio:</label>
          <input
            type="number"
            name="hydrogenSulfide"
            value={formik.values.hydrogenSulfide}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.hydrogenSulfide && formik.errors.hydrogenSulfide && (
            <span className="text-red-500 text-sm">
              {formik.errors.hydrogenSulfide}
            </span>
          )}
        </div>
      </div>
      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">Surfactantes:</label>
          <input
            type="number"
            name="surfactants"
            value={formik.values.surfactants}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.surfactants && formik.errors.surfactants && (
            <span className="text-red-500 text-sm">
              {formik.errors.surfactants}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700"> Coliformes Totais: </label>
          <input
            type="number"
            name="totalColiforms"
            value={formik.values.totalColiforms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.totalColiforms && formik.errors.totalColiforms && (
            <span className="text-red-500 text-sm">
              {formik.errors.totalColiforms}
            </span>
          )}
        </div>
      </div>
      <div className="flex sm:flex-row justify-center gap-3 max-sm:flex-col max-sm:gap-1">
        <div className="mb-4">
          <label className="block text-gray-700">
            Bactérias Heterotróficas:
          </label>
          <input
            type="number"
            name="heterotrophicBacteriaCount"
            value={formik.values.heterotrophicBacteriaCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.heterotrophicBacteriaCount &&
            formik.errors.heterotrophicBacteriaCount && (
              <span className="text-red-500 text-sm">
                {formik.errors.heterotrophicBacteriaCount}
              </span>
            )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Endotoxinas:</label>
          <input
            type="number"
            name="endotoxins"
            value={formik.values.endotoxins}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.endotoxins && formik.errors.endotoxins && (
            <span className="text-red-500 text-sm">
              {formik.errors.endotoxins}
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
};

export default ReservoirAnalysisForm;
