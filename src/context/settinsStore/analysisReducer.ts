import { AnalysisResult } from '@/utils/models/analysis';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface AnalysisState {
  analysisResult: AnalysisResult[];
}

const initialState: AnalysisState = {
    analysisResult: [],
};

const analysistsSlice = createSlice({
  name: 'analysisResult',
  initialState,
  reducers: {
    addAnalysis(state, action: PayloadAction<AnalysisResult>) {
      state.analysisResult.push(action.payload);
    },
    // Outras reducers relacionadas aos comentários
  },
});

export const { addAnalysis} = analysistsSlice.actions;
export default analysistsSlice.reducer;
