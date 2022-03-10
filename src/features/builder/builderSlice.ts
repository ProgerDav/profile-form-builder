import { createSlice } from "@reduxjs/toolkit";
import { EditFieldPayloadAction, FieldType } from "./types";

import {
  BuilderState,
  CreateFieldPayloadAction,
  DeleteFieldPayloadAction,
} from "./types";

const initialState: BuilderState = {
  fields: [
    {
      type: FieldType.NAME,
      details: { label: "FullName", required: true, visible: true },
    },
    {
      type: FieldType.TEXT,
      details: { label: "About You", required: true, visible: true, rows: 5 },
    },
    {
      type: FieldType.LINK,
      details: {
        label: "LinkedIn Url",
        required: true,
        visible: true,
      },
    },
    {
      type: FieldType.DATE,
      details: {
        label: "Last Login Date",
        required: true,
        visible: true,
        pattern: "d-m-y",
      },
    },
  ],
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
