import { configureStore } from '@reduxjs/toolkit'
import analysisReducer from './settinsStore/analysisReducer'
import usersReducer from './settinsStore/userReducer'
import apevisaReducer from './settinsStore/userReducer'
import chemistReducer from './settinsStore/chemistReducer'
export const store = configureStore({
  reducer: {
   analysis: analysisReducer,
   users: usersReducer,
   apevisa:apevisaReducer,
   chemist :chemistReducer 
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


