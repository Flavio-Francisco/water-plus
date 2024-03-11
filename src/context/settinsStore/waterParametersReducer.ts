import { WaterTreatmentParameters } from "../../utils/models/WaterParametersModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WaterTreatmentState {
  waterParameters: WaterTreatmentParameters[];
}

const initialState: WaterTreatmentState = {
  waterParameters: [],
};

const WaterTreatmentSlice = createSlice({
  name: "WaterTreatment",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<WaterTreatmentParameters>) {
      state.waterParameters.push(action.payload);
    },
    // Outras reducers relacionadas aos usuários
  },
});

export const { addUser } = WaterTreatmentSlice.actions;
export default WaterTreatmentSlice.reducer;
