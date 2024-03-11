import { ReportModel } from "../../utils/models/report";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReportState {
  report: ReportModel[];
}

const initialState: ReportState = {
  report: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<ReportModel>) {
      state.report.push(action.payload);
    },
    // Outras reducers relacionadas aos usuários
  },
});

export const { addUser } = reportSlice.actions;
export default reportSlice.reducer;
