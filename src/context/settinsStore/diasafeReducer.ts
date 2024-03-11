import { DiasafeModel } from "../../utils/models/diasafe";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiasafeState {
  diasafe: DiasafeModel[];
}

const initialState: DiasafeState = {
  diasafe: [],
};

const diasafeStatetSlice = createSlice({
  name: "diasafe",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<DiasafeModel>) {
      state.diasafe.push(action.payload);
    },
    // Outras reducers relacionadas aos usuários
  },
});

export const { addUser } = diasafeStatetSlice.actions;
export default diasafeStatetSlice.reducer;
