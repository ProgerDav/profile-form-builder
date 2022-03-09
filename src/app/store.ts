import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import builderReducer from "../features/builder/builderSlice";

export const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
