import { PayloadAction } from "@reduxjs/toolkit";
export enum FieldType {
  NAME = "NAME",
  LINK = "LINK",
  TEXT = "TEXT",
  DATE = "DATE",
}

export const fieldTypeVariants: FieldType[] = [
  FieldType.NAME,
  FieldType.TEXT,
  FieldType.DATE,
  FieldType.LINK,
];

export type Field = {
  type: FieldType;
  details: {
    required: boolean;
    visible: boolean;
    label: string;
    pattern?: string;
    rows?: number;
  };
};

// Redux Actions and InitialState
export type CreateFieldPayloadAction = PayloadAction<Field>;

export type EditFieldPayloadAction = PayloadAction<{
  field: Field;
  id: number;
}>;

export type DeleteFieldPayloadAction = PayloadAction<number>;

export interface BuilderState {
  fields: Field[];
}
