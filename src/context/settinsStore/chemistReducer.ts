import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CredentialsChemist } from "@/utils/models/Credentials";


interface ChemistState {
  chemist: CredentialsChemist[];
}


const initialState: ChemistState = {
    chemist: [],
};

const chemistSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<CredentialsChemist>) {
      state.chemist.push(action.payload);
    },
    // Outras reducers relacionadas aos usuários
  },
});

export const { addUser } = chemistSlice.actions;
export default chemistSlice.reducer;
