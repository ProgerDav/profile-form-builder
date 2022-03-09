import { createSlice, createSelector } from "@reduxjs/toolkit";
import { EditFieldPayloadAction } from "./types";
import {
  BuilderState,
  CreateFieldPayloadAction,
  DeleteFieldPayloadAction,
} from "./types";

const initialState: BuilderState = {
  fields: [],
};
const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    createField: (state, action: CreateFieldPayloadAction) => {
      state.fields.push(action.payload);
    },

    editField: (state, action: EditFieldPayloadAction) => {
      const { id, field } = action.payload;
      state.fields[id] = field;
    },

    deleteField: (state, action: DeleteFieldPayloadAction) => {
      state.fields = state.fields.filter((_, i) => i !== action.payload);
    },
  },
});

export const { createField, editField, deleteField } = builderSlice.actions;

export default builderSlice.reducer;
