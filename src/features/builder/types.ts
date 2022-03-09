import { PayloadAction } from "@reduxjs/toolkit";
export enum FieldType {
  NAME = "NAME",
  LINK = "NAME",
  TEXT = "NAME",
  DATE = "NAME",
}

export const fieldTypeVariants: FieldType[] = [
  FieldType.NAME,
  FieldType.TEXT,
  FieldType.DATE,
  FieldType.LINK,
];

export interface IBaseField {
  type: FieldType;
  details: {
    required: boolean;
    visible: boolean;
    label: string;
  };
}

export interface INameField extends IBaseField {
  type: FieldType.NAME;
}

export interface ILinkField extends IBaseField {
  type: FieldType.LINK;
}

export interface IDateField extends IBaseField {
  type: FieldType.DATE;
  details: {
    required: boolean;
    visible: boolean;
    label: string;
    pattern: string;
  };
}

export interface ITextField extends IBaseField {
  type: FieldType.TEXT;
  details: {
    required: boolean;
    visible: boolean;
    label: string;
    rows: number;
  };
}

export type Field = INameField | ITextField | ILinkField | IDateField;

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
