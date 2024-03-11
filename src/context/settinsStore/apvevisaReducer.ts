import { ApvisaModel } from '@/utils/models/Apvisa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';





const initialState: ApvisaModel[] = [];

const apevisaSlice = createSlice({
  name: 'apevisa',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<ApvisaModel>) {
      state.push(action.payload);
    },
    // Outras reducers relacionadas aos usuários
  },
});

export const { addUser } = apevisaSlice.actions;
export default apevisaSlice.reducer;